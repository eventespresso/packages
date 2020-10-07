import React from 'react';
import classNames from 'classnames';

import { DateTimePicker as DateTimePickerAdapter } from '@eventespresso/dates';

import type { FieldRendererProps } from '../types';
import { useFormConfig } from '../hooks';

const DateTimePicker: React.FC<FieldRendererProps> = ({ className, input: { onChange, ...input }, ...props }) => {
	const { locale, dateTimeFormat } = useFormConfig();

	const htmlClass = classNames(
		className,
		'ee-datetime-picker',
		'ee-calendar-datetime-picker',
		'ee-input-base-wrapper'
	);

	return (
		<div className={htmlClass}>
			<DateTimePickerAdapter
				{...input}
				dateFormat={dateTimeFormat}
				locale={locale}
				{...props}
				id={input.name}
				onChange={onChange}
			/>
		</div>
	);
};

export default DateTimePicker;
