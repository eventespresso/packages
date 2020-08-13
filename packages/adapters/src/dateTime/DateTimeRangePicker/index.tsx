import React from 'react';
import ReactDateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import { __ } from '@wordpress/i18n';

import { convertWordPressDateFormat, convertWordPressTimeFormat } from '../utilities';
import type { DateTimeRangePickerProps } from '../types';

import '../style.scss';
import './style.scss';

export const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
	dateFormat,
	endDate,
	locale,
	onChange,
	startDate,
	...props
}) => {
	// convert date format to acceptable values for react-datetimerange-picker
	const newDateFormat = convertWordPressDateFormat(dateFormat);
	const newDateTimeFormat = convertWordPressTimeFormat(newDateFormat);

	return (
		<ReactDateTimeRangePicker
			calendarAriaLabel={__('show calendar')}
			clearAriaLabel={__('clear values and reset')}
			closeWidgets={false}
			disableClock
			format={newDateTimeFormat}
			locale={locale}
			onChange={onChange}
			showLeadingZeros
			value={[new Date(startDate), new Date(endDate)]}
			{...props}
		/>
	);
};
