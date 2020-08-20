import React from 'react';
import classNames from 'classnames';

import { TimePicker as TimePickerAdapter } from '@eventespresso/dates';
import { useConfig } from '@eventespresso/services';
import type { FieldRendererProps } from '../types';

const TimePicker: React.FC<FieldRendererProps> = ({
	className,
	input: { onChange: onInputChange, value, ...input },
	onChange,
	onChangeValue,
	meta,
	format,
	...props
}) => {
	const {
		dateTimeFormats: { timeFormat },
		locale: { user },
	} = useConfig();
	const classname = classNames(className, 'ee-time-picker', 'ee-calendar-datetime-picker', 'ee-input-base-wrapper');

	return (
		<div className={classname}>
			<TimePickerAdapter
				{...input}
				{...props}
				locale={user}
				onChange={onInputChange}
				timeFormat={timeFormat}
				value={value}
				required
			/>
		</div>
	);
};

export default TimePicker;
