import { Frequency } from 'rrule';

import { ComputeRule } from './types';
import { Day } from '../../../types';

const computeMonthlyOnDay: ComputeRule<Day> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.MONTHLY || !rruleObj.bymonthday) {
		return data.repeat.monthly.on.day;
	}

	return typeof rruleObj.bymonthday === 'number' ? rruleObj.bymonthday : rruleObj.bymonthday[0];
};

export default computeMonthlyOnDay;
