import React from 'react';
import classNames from 'classnames';
import { DatePicker as DatepickerAdapter } from '@eventespresso/adapters';

import type { FieldRendererProps } from '../types';

const DatePicker: React.FC<FieldRendererProps> = ({ className, input: { onChange, ...input }, meta, ...props }) => {
	const htmlClass = classNames(className, 'ee-date-picker', 'ee-calendar-datetime-picker', 'ee-input-base-wrapper');

	return (
		<div className={htmlClass}>
			<DatepickerAdapter {...input} {...props} onChangeValue={onChange} required />
		</div>
	);
};

export default DatePicker;
