import { useState, useCallback, useEffect } from 'react';

import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

import { NOW } from '@eventespresso/constants';
import { DatePicker, DateTimePicker } from '../';
import { DateRangePickerLegend } from './DateRangePickerLegend';
import type { DateRangePickerProps } from '../types';

import './styles.scss';

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
	endDateTZ,
	endLabel,
	inputValue,
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

	const onChangeStart = useCallback((date) => setStartDate(date), []);

	const onChangeEnd = useCallback((date) => setEndDate(date), []);

	const className = classNames('date-range-picker', props.className);

	const Component = showTime ? DateTimePicker : DatePicker;

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
