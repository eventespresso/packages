import React from 'react';
import { __ } from '@wordpress/i18n';

import { TIME_ONLY_12H_SHORT_FORMAT } from '@eventespresso/constants';
import { DatePickerProps } from './types';
import { DatePicker } from './DatePicker';

export const TimePicker: React.FC<DatePickerProps> = (props) => {
	return (
		<DatePicker
			showTimeInput
			showTimeSelectOnly
			timeCaption={__('time')}
			{...props}
			timeFormat={TIME_ONLY_12H_SHORT_FORMAT}
			dateFormat={TIME_ONLY_12H_SHORT_FORMAT}
		/>
	);
};
