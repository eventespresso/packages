import React from 'react';

import { DateRangePicker } from './DateRangePicker';
import type { DateRangePickerProps } from './types';

export const DateTimeRangePicker: React.FC<Omit<DateRangePickerProps, 'showTime'>> = (props) => {
	return <DateRangePicker showTime {...props} />;
};
