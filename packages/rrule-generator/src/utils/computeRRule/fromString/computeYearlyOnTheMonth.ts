import { Frequency } from 'rrule';

import { ComputeRule } from './types';
import { Month } from '../../../types';
import { getOnMonth } from './utils';

const computeYearlyOnTheMonth: ComputeRule<Month> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.YEARLY || !rruleObj.bymonth) {
		return data?.repeat?.yearly?.onThe?.month;
	}

	return getOnMonth(rruleObj.bymonth);
};

export default computeYearlyOnTheMonth;
