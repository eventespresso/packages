import { compareDesc } from 'date-fns';

import { prepDatesForComparison } from './misc';
import type { DateComparisonFunc } from './types';

/**
 * returns:
 * 		 true if firstDate is on or before secondDate
 *      false if firstDate is after secondDate
 */
const isOnOrBeforeDate: DateComparisonFunc = (firstDate, secondDate, considerTime = false) => {
	const [parsedFirstDate, parsedSecondDate] = prepDatesForComparison(firstDate, secondDate, considerTime);
	return compareDesc(parsedFirstDate, parsedSecondDate) > -1;
};

export default isOnOrBeforeDate;
