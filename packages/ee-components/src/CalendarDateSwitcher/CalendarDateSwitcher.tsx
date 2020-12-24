import React from 'react';

import { useTimeZoneTime } from '@eventespresso/services';
import { CalendarDateSwitcher as CalendarDateSwitcherUI } from '@eventespresso/components';

import type { CalendarDateSwitcherProps } from './types';

const CalendarDateSwitcher: React.FC<CalendarDateSwitcherProps> = (props) => {
	const { formatForSite } = useTimeZoneTime();

	return <CalendarDateSwitcherUI formatFn={formatForSite} {...props} />;
};

export default CalendarDateSwitcher;
