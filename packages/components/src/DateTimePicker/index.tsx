import React from 'react';

import { DateTimePicker as DateTimePickerAdapter, DatePickerProps } from '@eventespresso/dates';
import { useConfig } from '@eventespresso/services';

interface Props extends Pick<DatePickerProps, 'onChange' | 'value'> {}

export const DateTimePicker: React.FC<Props> = ({ onChange, value }) => {
	const {
		dateTimeFormats: { dateTimeFormat },
		locale: { user },
	} = useConfig();

	return (
		<DateTimePickerAdapter
			className='ee-date-time-picker'
			dateFormat={dateTimeFormat}
			locale={user}
			onChange={onChange}
			value={value}
		/>
	);
};
