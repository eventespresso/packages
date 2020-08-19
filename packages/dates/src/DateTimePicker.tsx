import React from 'react';
import { __ } from '@wordpress/i18n';
import 'react-datepicker/dist/react-datepicker.css';

import { TIME_ONLY_24H_SHORT_FORMAT, DATETIME_FORMAT } from '@eventespresso/constants';
import { DatePickerProps } from './types';
import { DatePicker } from './DatePicker';

export const DateTimePicker: React.FC<DatePickerProps> = (props) => {
	return (
		<DatePicker
			showTimeInput
			timeCaption={__('time')}
			{...props}
			timeFormat={TIME_ONLY_24H_SHORT_FORMAT}
			dateFormat={DATETIME_FORMAT}
		/>
	);
};
