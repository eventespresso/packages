import React from 'react';

import { DatePicker as DatePickerAdapter, DatePickerProps } from '@eventespresso/dates';
import { useConfig } from '@eventespresso/services';

import './style.scss';

interface Props extends Pick<DatePickerProps, 'onChange' | 'value'> {}

export const DatePicker: React.FC<Props> = ({ onChange, value }) => {
	const {
		dateTimeFormats: { dateTimeFormat },
		locale: { user },
	} = useConfig();

	return (
		<DatePickerAdapter
			className='ee-date-picker'
			dateFormat={dateTimeFormat}
			locale={user}
			onChange={onChange}
			value={value}
		/>
	);
};
