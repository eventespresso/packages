import React from 'react';

import { DatePicker as DatePickerAdapter, DatePickerProps } from '@eventespresso/adapters';
import { useConfig } from '@eventespresso/services';

interface Props extends Pick<DatePickerProps, 'onChange' | 'value'> {}

export const DatePicker: React.FC<Props> = ({ onChange, value }) => {
	const {
		dateTimeFormats: { dateTimeFormat },
		locale: { user },
	} = useConfig();

	return <DatePickerAdapter dateFormat={dateTimeFormat} locale={user} onChange={onChange} value={value} />;
};
