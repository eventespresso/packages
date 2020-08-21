import React from 'react';
import classNames from 'classnames';

import { TimePicker as TimePickerAdapter } from '@eventespresso/dates';
import type { FieldRendererProps } from '../types';
import { useFormConfig } from '../hooks';

const TimePicker: React.FC<FieldRendererProps> = ({
	className,
	input: { onChange: onInputChange, value, ...input },
	onChange,
	onChangeValue,
	meta,
	format,
	...props
}) => {
	const { locale, timeFormat } = useFormConfig();

	const classname = classNames(className, 'ee-time-picker', 'ee-calendar-datetime-picker', 'ee-input-base-wrapper');

	return (
		<div className={classname}>
			<TimePickerAdapter
				{...input}
				locale={locale}
				onChange={onInputChange}
				timeFormat={timeFormat}
				value={value}
				{...props}
			/>
		</div>
	);
};

export default TimePicker;
