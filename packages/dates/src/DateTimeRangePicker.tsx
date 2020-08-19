import React from 'react';

import { DateRangePickerProps } from './types';
import { DateRangePicker } from './DateRangePicker';

export const DateTimeRangePicker: React.FC<Omit<DateRangePickerProps, 'showTime'>> = (props) => {
	return <DateRangePicker showTime {...props} />;
};
