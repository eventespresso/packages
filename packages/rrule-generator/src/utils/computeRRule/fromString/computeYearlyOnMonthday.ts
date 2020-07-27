import { Frequency } from 'rrule';

import { ComputeRule } from './types';
import { Day } from '../../../types';

const computeYearlyOnMonthday: ComputeRule<Day> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.YEARLY || !rruleObj.bymonthday) {
		return data?.repeat?.yearly?.on?.day;
	}

	if (typeof rruleObj.bymonthday === 'number') {
		return rruleObj.bymonthday;
	}

	return rruleObj.bymonthday[0];
};

export default computeYearlyOnMonthday;
