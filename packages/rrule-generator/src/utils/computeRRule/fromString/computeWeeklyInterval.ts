import { Frequency } from 'rrule';

import { ComputeRule } from './types';

const computeWeeklyInterval: ComputeRule<number> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.WEEKLY) {
		return data?.repeat?.weekly?.interval;
	}

	return rruleObj.interval;
};

export default computeWeeklyInterval;
