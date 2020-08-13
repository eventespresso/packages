import React from 'react';
import classNames from 'classnames';
import { TimePicker as TimePickerAdapter } from '@eventespresso/adapters';
// import { TimezoneTimeInfo } from '../../';
import type { FieldRendererProps } from '../../types';

import './style.scss';

const TimePicker: React.FC<FieldRendererProps> = ({
	className,
	input: { onChange: onInputChange, value, ...input },
	onChange,
	onChangeValue,
	meta,
	format,
	...props
}) => {
	const classname = classNames(className, 'ee-time-picker', 'ee-calendar-datetime-picker', 'ee-input-base-wrapper');

	return (
		<div className={classname}>
			<TimePickerAdapter {...input} {...props} onChangeValue={onInputChange} value={value} required />
			{/* <TimezoneTimeInfo date={value} /> */}
		</div>
	);
};

export default TimePicker;
