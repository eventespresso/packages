import React from 'react';
import { __ } from '@eventespresso/i18n';

import { DatePickerProps } from './types';
import { DatePicker } from './DatePicker';
import { DEFAULT_DATETIME_FORMAT } from './constants';

export const DateTimePicker: React.FC<DatePickerProps> = (props) => {
	return <DatePicker showTimeSelect timeCaption={__('time')} dateFormat={DEFAULT_DATETIME_FORMAT} {...props} />;
};
