import React from 'react';
import { __ } from '@eventespresso/i18n';

import { DatePicker } from './DatePicker';
import type { DatePickerProps } from './types';

export const TimePicker: React.FC<DatePickerProps> = (props) => {
	return (
		<DatePicker
			dateFormat={props.timeFormat}
			showTimeSelect
			showTimeSelectOnly
			timeCaption={__('time')}
			timeIntervals={15}
			{...props}
		/>
	);
};
