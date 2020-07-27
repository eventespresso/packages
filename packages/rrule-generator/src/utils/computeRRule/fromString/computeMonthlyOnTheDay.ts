import { Frequency } from 'rrule';

import { ComputeRule } from './types';
import { Day } from '../../..';
import { getOnTheDay } from './utils';

const computeMonthlyOnTheDay: ComputeRule<Day> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.MONTHLY || !rruleObj.byweekday) {
		return data?.repeat?.monthly?.onThe?.day;
	}

	return getOnTheDay(rruleObj.byweekday, data?.repeat?.monthly?.onThe?.day);
};

export default computeMonthlyOnTheDay;
