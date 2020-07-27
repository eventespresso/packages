import { Frequency } from 'rrule';

import { ComputeRule } from './types';
import { Day } from '../../../types';
import { getOnTheDay } from './utils';

const computeYearlyOnTheMonthday: ComputeRule<Day> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.YEARLY || !rruleObj.byweekday) {
		return data?.repeat?.yearly?.onThe?.day;
	}

	return getOnTheDay(rruleObj.byweekday, data?.repeat?.yearly?.onThe?.day);
};

export default computeYearlyOnTheMonthday;
