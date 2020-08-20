import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as locales from 'date-fns/locale';

import { DatePickerProps } from './types';

import './styles.scss';

export const DatePicker: React.FC<DatePickerProps> = ({ value, locale, onChange, inputValue, ...props }) => {
	// get locale object from date-fns
	// we need to change "en_US" to "enUS"
	const datefnsLocale = locales?.[locale?.user.replace(/-_/, '')] ?? locales.enUS;

	return (
		<ReactDatePicker onChange={onChange} selected={value} value={inputValue} locale={datefnsLocale} {...props} />
	);
};
