import React, { useCallback, useState } from 'react';
import { default as ReactDatepicker } from 'react-date-picker';

import { CalendarOutlined, CloseOutlined } from '@eventespresso/icons';
import { convertWordPressDateFormat } from '../utilities';
import type { DatePickerProps } from '../types';

import '../style.scss';

const DatePicker: React.FC<DatePickerProps> = ({ dateFormat, locale, onChange, onChangeValue, value, ...props }) => {
	const [date, setDate] = useState(value);

	const onChangeHandler: DatePickerProps['onChange'] = useCallback(
		(newDate) => {
			setDate(newDate);
			if (!newDate || newDate === date) {
				return;
			}

			if (typeof onChangeValue === 'function') {
				onChangeValue(newDate as Date);
			}

			if (typeof onChange === 'function') {
				onChange(newDate);
			}
		},
		[date, onChange, onChangeValue]
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
			value={date}
		/>
	);
};

export default DatePicker;
