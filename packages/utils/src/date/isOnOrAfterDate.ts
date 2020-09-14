import { compareAsc } from 'date-fns';

import { prepDatesForComparison } from './misc';
import type { DateComparisonFunc } from './types';

/**
 * returns:
 * 		 true if firstDate is on or after secondDate
 *      false if firstDate is before secondDate
 */
const isOnOrAfterDate: DateComparisonFunc = (firstDate, secondDate, considerTime = false) => {
	const [parsedFirstDate, parsedSecondDate] = prepDatesForComparison(firstDate, secondDate, considerTime);
	return compareAsc(parsedFirstDate, parsedSecondDate) > -1;
};

export default isOnOrAfterDate;
