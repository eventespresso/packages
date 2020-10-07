import React from 'react';
import classNames from 'classnames';
import { omit } from 'ramda';

import { TimePicker as TimePickerAdapter } from '@eventespresso/dates';
import type { FieldRendererProps } from '../types';
import { useFormConfig } from '../hooks';

const TimePicker: React.FC<FieldRendererProps> = ({
	className,
	input: { onChange: onInputChange, value, ...input },
	...props
}) => {
	const { locale, timeFormat } = useFormConfig();

	const classname = classNames(className, 'ee-time-picker', 'ee-calendar-datetime-picker', 'ee-input-base-wrapper');
	const propsWithoutMeta = omit(['meta'], props);

	return (
		<div className={classname}>
			<TimePickerAdapter
				{...input}
				locale={locale}
				timeFormat={timeFormat}
				value={value}
				{...propsWithoutMeta}
				onChange={onInputChange}
			/>
		</div>
	);
};

export default TimePicker;
