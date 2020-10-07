import React from 'react';
import classNames from 'classnames';

import { DatePicker as DatepickerAdapter } from '@eventespresso/dates';

import type { FieldRendererProps } from '../types';
import { useFormConfig } from '../hooks';

const DatePicker: React.FC<FieldRendererProps> = ({ className, input: { onChange, ...input }, ...props }) => {
	const htmlClass = classNames(className, 'ee-date-picker', 'ee-calendar-datetime-picker', 'ee-input-base-wrapper');

	const { locale, dateFormat } = useFormConfig();

	return (
		<div className={htmlClass}>
			<DatepickerAdapter {...input} dateFormat={dateFormat} locale={locale} {...props} onChange={onChange} />
		</div>
	);
};

export default DatePicker;
