import React, { useCallback, useState } from 'react';
import { format, parse } from 'date-fns';
import ReactTimePicker from 'react-time-picker';

import { CloseOutlined } from '@eventespresso/icons';
import { convertWordPressTimeFormat } from '../utilities';

import type { TimePickerProps } from '../types';
import '../style.scss';

const TimePicker: React.FC<TimePickerProps> = ({ timeFormat, locale, onChange, onChangeValue, value, ...props }) => {
	const [time, setTime] = useState(format(value, 'HH:mm'));

	// convert date format to accepatble values for react-time-picker
	const convertedTimeFormat = convertWordPressTimeFormat(timeFormat);

	const onChangeHandler: TimePickerProps['onChange'] = useCallback(
		(newTime) => {
			// incoming value from timepicker is 24hr time like "17:00"
			setTime(newTime);
			if (!newTime || newTime === time) {
				return;
			}
			const newDate: Date = parse(newTime, 'HH:mm', value);
			if (typeof onChangeValue === 'function') {
				onChangeValue(newDate);
			}

			if (typeof onChange === 'function') {
				onChange(newDate.toISOString());
			}
		},
		[onChange, onChangeValue, time, value]
	);

	return (
		<ReactTimePicker
			format={convertedTimeFormat}
			{...props}
			clearIcon={<CloseOutlined />}
			clockIcon={null}
			locale={locale}
			onChange={onChangeHandler}
			required
			value={time}
		/>
	);
};

export default TimePicker;
