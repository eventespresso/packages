import { compareDesc } from 'date-fns';

import { prepDatesForComparison } from './misc';
import type { SingleDateComparisonFunc } from './types';

const now = new Date();

/**
 * returns:
 *      1 if firstDate is before today
 *      -1 if firstDate is after today
 *      0 if dates are equal
 */
const isOnOrBeforeToday: SingleDateComparisonFunc = (firstDate, considerTime = false) => {
	const [parsedFirstDate, parsedSecondDate] = prepDatesForComparison(firstDate, now, considerTime);
	return compareDesc(parsedFirstDate, parsedSecondDate);
};

export default isOnOrBeforeToday;
