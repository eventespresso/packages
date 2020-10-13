import React, { useMemo } from 'react';
import ReactDatePicker from 'react-datepicker';
import * as locales from 'date-fns/locale';

import { DatePickerProps } from './types';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';

export const DatePicker: React.FC<DatePickerProps> = ({ inputValue, locale, onChange, value, ...props }) => {
	// get locale object from date-fns
	// we need to change "en_US" to "enUS"
	const datefnsLocale = useMemo(() => locales?.[locale?.replace(/-_/, '')] ?? locales.enUS, [locale]);

	return (
		<ReactDatePicker
			calendarClassName='ee-datepicker'
			onChange={onChange}
			selected={value}
			value={inputValue}
			locale={datefnsLocale}
			{...props}
		/>
	);
};
