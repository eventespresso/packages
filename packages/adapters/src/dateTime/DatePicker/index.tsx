import React, { useCallback } from 'react';
import { default as ReactDatepicker } from 'react-date-picker';

import { CalendarOutlined, CloseOutlined } from '@eventespresso/icons';
import { convertWordPressDateFormat } from '../utilities';
import type { DatePickerProps } from '../types';

import '../style.scss';

const DatePicker: React.FC<DatePickerProps> = ({ dateFormat, locale, onChange, onChangeValue, value, ...props }) => {
	const onChangeHandler: DatePickerProps['onChange'] = useCallback(
		(newDate) => {
			if (!newDate) {
				return;
			}
			onChangeValue?.(newDate);
			onChange?.(newDate);
		},
		[onChange, onChangeValue]
	);

	// convert date format to accepatble values for react-date-picker
	const convertedDateFormat = convertWordPressDateFormat(dateFormat);

	return (
		<ReactDatepicker
			format={convertedDateFormat}
			{...props}
			calendarIcon={<CalendarOutlined />}
			clearIcon={<CloseOutlined />}
			locale={locale}
			onChange={onChangeHandler}
			value={value}
		/>
	);
};

export default DatePicker;
