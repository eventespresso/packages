import { head } from 'ramda';

import activeUpcoming from '../activeUpcoming';
import type { DatetimeFilterFn } from '../types';

const nextActiveUpcomingOnly: DatetimeFilterFn = (dates) => {
	const activeUpcomingDates = activeUpcoming(dates);
	const firstActiveUpcomingDates = head(activeUpcomingDates);

	return firstActiveUpcomingDates ? [firstActiveUpcomingDates] : [];
};

export default nextActiveUpcomingOnly;
