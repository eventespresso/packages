import { Frequency } from 'rrule';

import { ComputeRule } from './types';

const computeHourlyInterval: ComputeRule<number> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.HOURLY) {
		return data?.repeat?.daily?.interval;
	}

	return rruleObj.interval;
};

export default computeHourlyInterval;
