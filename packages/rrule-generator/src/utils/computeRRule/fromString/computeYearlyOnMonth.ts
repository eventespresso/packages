import { Frequency } from 'rrule';

import { ComputeRule } from './types';
import { Month } from '../../../types';
import { getOnMonth } from './utils';

const computeYearlyOnMonth: ComputeRule<Month> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.YEARLY || !rruleObj.bymonthday) {
		return data.repeat?.yearly?.on?.month;
	}

	return getOnMonth(rruleObj.bymonth);
};

export default computeYearlyOnMonth;
