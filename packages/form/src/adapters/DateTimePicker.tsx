import React from 'react';
import classNames from 'classnames';

import { DateTimePicker as DateTimePickerAdapter } from '@eventespresso/dates';
import { useConfig } from '@eventespresso/services';

import type { FieldRendererProps } from '../types';

const DateTimePicker: React.FC<FieldRendererProps> = ({ className, input: { onChange, ...input }, meta, ...props }) => {
	const {
		// dateTimeFormats: { dateFormat },
		locale: { user },
	} = useConfig();
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
				{...props}
				// dateFormat={dateFormat}
				locale={user}
				onChange={onChange}
				required
			/>
		</div>
	);
};

export default DateTimePicker;
