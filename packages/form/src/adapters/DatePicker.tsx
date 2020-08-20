import React from 'react';
import classNames from 'classnames';

import { DatePicker as DatepickerAdapter } from '@eventespresso/dates';

import type { FieldRendererProps } from '../types';

const DatePicker: React.FC<FieldRendererProps> = ({
	className,
	dateTimeFormats: { dateFormat },
	input: { onChange, ...input },
	locale,
	meta,
	...props
}) => {
	const htmlClass = classNames(className, 'ee-date-picker', 'ee-calendar-datetime-picker', 'ee-input-base-wrapper');

	return (
		<div className={htmlClass}>
			<DatepickerAdapter
				{...input}
				{...props}
				dateFormat={dateFormat}
				locale={locale}
				onChange={onChange}
				required
			/>
		</div>
	);
};

export default DatePicker;
