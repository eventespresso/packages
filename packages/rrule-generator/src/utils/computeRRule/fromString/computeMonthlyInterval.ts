import { Frequency } from 'rrule';

import { ComputeRule } from './types';

const computeMonthlyInterval: ComputeRule<number> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.MONTHLY) {
		return data?.repeat?.monthly?.interval;
	}

	return rruleObj.interval;
};

export default computeMonthlyInterval;
