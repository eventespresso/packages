import { ComputeRule } from './types';

const computeDailyInterval: ComputeRule<number> = (data, rruleObj) => {
	if (rruleObj.freq !== 3) {
		return data?.repeat?.daily?.interval;
	}

	return rruleObj.interval;
};

export default computeDailyInterval;
