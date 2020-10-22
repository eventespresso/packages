import { isToday as isTodayAdapter } from 'date-fns';

import { prepDatesForComparison } from './misc';
import type { SingleDateComparisonFunc } from './types';

export const isToday: SingleDateComparisonFunc = (date, considerTime = false) => {
	const [parsedDate] = prepDatesForComparison(date, null, considerTime);
	return isTodayAdapter(parsedDate);
};
