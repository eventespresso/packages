import { compareDesc } from 'date-fns';

import { prepDatesForComparison } from './misc';
import type { DateComparisonFunc } from './types';

/**
 * returns:
 *      1 if firstDate is before secondDate
 *      -1 if firstDate is after secondDate
 *      0 if dates are equal
 */
const isOnOrBeforeDate: DateComparisonFunc = (firstDate, secondDate, considerTime = false) => {
	const [parsedFirstDate, parsedSecondDate] = prepDatesForComparison(firstDate, secondDate, considerTime);
	return compareDesc(parsedFirstDate, parsedSecondDate);
};

export default isOnOrBeforeDate;
