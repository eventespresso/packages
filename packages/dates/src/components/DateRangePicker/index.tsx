import { useState, useCallback, useEffect } from 'react';

import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

import { NOW } from '@eventespresso/constants';
import { DatePicker, DateTimePicker } from '../';
import { DateRangePickerLegend } from './DateRangePickerLegend';
import type { DateRangePickerProps } from '../../types';
import { isOnOrBeforeDate, setTimeToJustBeforeZeroHour } from '../../utils';

import './styles.scss';

const justBeforeZeroHour = setTimeToJustBeforeZeroHour(new Date());

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
	endDateTZ,
	endLabel,
	inputValue,
	limitEndByStart,
	onChange,
	showTime,
	startDateTZ,
	startLabel,
	value,
	...props
}) => {
	const [startDate, setStartDate] = useState(value?.[0] || NOW);
	const [endDate, setEndDate] = useState(value?.[1] || NOW);

	useEffect(() => {
		onChange([startDate, endDate]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [endDate, startDate]);

	// if the state changes from the consumer, we need to update the local state
	useEffect(() => {
		setStartDate(value?.[0]);
		setEndDate(value?.[1]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const onChangeStart = useCallback((date) => setStartDate(date), []);

	const onChangeEnd = useCallback((date) => setEndDate(date), []);

	const className = classNames('date-range-picker', props.className);

	const Component = showTime ? DateTimePicker : DatePicker;

	// if start and end dates are on the same day of the month
	const isOnSameDay = isOnOrBeforeDate(endDate, startDate, false);

	// add time restrictions only if the day is same as startDate
	const minTime = limitEndByStart && isOnSameDay && startDate;
	const maxTime = limitEndByStart && isOnSameDay && justBeforeZeroHour;
	const minDate = limitEndByStart && startDate;
	return (
		<div className={className}>
			<div className='date-range-picker__start'>
				<label className='date-range-picker__label'>{startLabel || __('start date')}</label>
				<div className='date-range-picker__start-input'>
					<Component
						endDate={endDate}
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
					{startDateTZ && startDateTZ}
				</div>
			</div>
			<div className='date-range-picker__end'>
				<label className='date-range-picker__label'>{endLabel || __('end date')}</label>
				<div className='date-range-picker__end-input'>
					<Component
						endDate={endDate}
						fixedHeight
						inputValue={inputValue?.[1]}
						onChange={onChangeEnd}
						selectsEnd
						startDate={startDate}
						value={endDate}
						minDate={minDate}
						minTime={minTime}
						maxTime={maxTime}
						{...props}
					>
						<DateRangePickerLegend />
					</Component>
					{endDateTZ && endDateTZ}
				</div>
			</div>
		</div>
	);
};
