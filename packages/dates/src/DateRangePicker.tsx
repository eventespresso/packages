import React, { useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import { isOnOrAfterToday, isOnOrAfterDate, isOnOrBeforeDate } from '@eventespresso/utils';

import { DateRangePickerProps } from './types';
import { DatePicker } from './DatePicker';
import { DateTimePicker } from './DateTimePicker';
import { DateRangePickerLegend } from './DateRangePickerLegend';

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
	className,
	endLabel,
	inputValue,
	onChange,
	showTime,
	startLabel,
	value,
	...props
}) => {
	const [startDate, setStartDate] = useState(value?.[0] || new Date());
	const [endDate, setEndDate] = useState(value?.[1] || new Date());

	useEffect(() => {
		onChange([startDate, endDate]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [endDate, startDate]);

	const onChangeStart = useCallback((date) => setStartDate(date), []);
	const onChangeEnd = useCallback((date) => setEndDate(date), []);

	const isAfterStartDate = useCallback(
		(date) => {
			return isOnOrAfterDate(date, startDate) && isOnOrAfterToday(date);
		},
		[startDate]
	);

	const isBeforeEndDate = useCallback(
		(date) => {
			return isOnOrBeforeDate(date, endDate) && isOnOrAfterToday(date);
		},
		[endDate]
	);

	const wrapperClassName = classNames(className, 'date-range-picker');

	const Component = showTime ? DateTimePicker : DatePicker;

	return (
		<div className={wrapperClassName}>
			<label className='date-range-picker__label'>{startLabel || __('start date')}</label>
			<Component
				endDate={endDate}
				filterDate={isBeforeEndDate}
				fixedHeight
				inputValue={inputValue?.[0]}
				onChange={onChangeStart}
				selectsStart
				startDate={startDate}
				value={startDate}
				{...props}
			>
				<DateRangePickerLegend />
			</Component>
			<label className='date-range-picker__label'>{endLabel || __('end date')}</label>
			<Component
				endDate={endDate}
				filterDate={isAfterStartDate}
				fixedHeight
				inputValue={inputValue?.[1]}
				onChange={onChangeEnd}
				selectsEnd
				startDate={startDate}
				value={endDate}
				{...props}
			>
				<DateRangePickerLegend />
			</Component>
		</div>
	);
};
