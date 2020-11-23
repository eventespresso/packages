import { compareDesc } from 'date-fns';

import { NOW } from '@eventespresso/constants';
import { prepDatesForComparison } from './misc';
import type { SingleDateComparisonFunc } from './types';

/**
 * returns:
 * 		 true if firstDate is today or before today
 *      false if firstDate is after today
 */
const isOnOrBeforeToday: SingleDateComparisonFunc = (firstDate, considerTime = false) => {
	const [parsedFirstDate, parsedSecondDate] = prepDatesForComparison(firstDate, NOW, considerTime);
	return compareDesc(parsedFirstDate, parsedSecondDate) > -1;
};

export default isOnOrBeforeToday;
