import React from 'react';
import { __ } from '@wordpress/i18n';

import { DatePickerProps } from './types';
import { DatePicker } from './DatePicker';

export const TimePicker: React.FC<DatePickerProps> = (props) => {
	return (
		<DatePicker
			dateFormat={props.timeFormat}
			showTimeSelect
			showTimeSelectOnly
			timeCaption={__('time')}
			{...props}
		/>
	);
};
