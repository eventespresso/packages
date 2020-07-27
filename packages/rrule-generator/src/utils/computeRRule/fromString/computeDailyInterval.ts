import { Frequency } from 'rrule';

import { ComputeRule } from './types';

const computeDailyInterval: ComputeRule<number> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.DAILY) {
		return data?.repeat?.daily?.interval;
	}

	return rruleObj.interval;
};

export default computeDailyInterval;
