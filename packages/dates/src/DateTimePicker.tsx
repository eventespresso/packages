import React from 'react';
import { __ } from '@eventespresso/i18n';

import { DatePickerProps } from './types';
import { DatePicker } from './DatePicker';

export const DateTimePicker: React.FC<DatePickerProps> = (props) => {
	return <DatePicker showTimeSelect timeCaption={__('time')} {...props} />;
};
