import React from 'react';
import classNames from 'classnames';

import { TimePicker as TimePickerAdapter } from '@eventespresso/dates';
// import { TimezoneTimeInfo } from '../../';
import type { FieldRendererProps } from '../../types';

import './style.scss';

const TimePicker: React.FC<FieldRendererProps> = ({
	className,
	dateTimeFormats: { timeFormat },
	format,
	input: { onChange: onInputChange, value, ...input },
	meta,
	locale,
	onChange,
	onChangeValue,
	...props
}) => {
	const classname = classNames(className, 'ee-time-picker', 'ee-calendar-datetime-picker', 'ee-input-base-wrapper');

	return (
		<div className={classname}>
			<TimePickerAdapter
				{...input}
				{...props}
				locale={locale}
				onChange={onInputChange}
				timeFormat={timeFormat}
				value={value}
				required
			/>
			{/* <TimezoneTimeInfo date={value} /> */}
		</div>
	);
};

export default TimePicker;
