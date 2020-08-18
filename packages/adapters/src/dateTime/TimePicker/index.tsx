import React, { useCallback } from 'react';
import { parse } from 'date-fns';
import ReactTimePicker from 'react-time-picker';

import { CloseOutlined } from '@eventespresso/icons';
import { convertWordPressTimeFormat } from '../utilities';

import type { TimePickerProps } from '../types';
import '../style.scss';

const TimePicker: React.FC<TimePickerProps> = ({ timeFormat, locale, onChange, onChangeValue, value, ...props }) => {
	// convert date format to accepatble values for react-time-picker
	const convertedTimeFormat = convertWordPressTimeFormat(timeFormat);

	const onChangeHandler = useCallback(
		(newTime: string): void => {
			// incoming value from timepicker is 24hr time like "17:00"
			if (!newTime) {
				return;
			}
			// lets not assume that TimePicker will be controlled.
			const referenceDate = value instanceof Date ? value : new Date();
			const newDate = parse(newTime, 'HH:mm', referenceDate);
			onChangeValue?.(newDate);
			onChange?.(newDate);
		},
		[onChange, onChangeValue, value]
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
			value={value}
		/>
	);
};

export default TimePicker;
