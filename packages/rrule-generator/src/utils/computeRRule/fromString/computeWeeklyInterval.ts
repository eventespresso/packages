import { ComputeRule } from './types';

const computeWeeklyInterval: ComputeRule<number> = (data, rruleObj) => {
	if (rruleObj.freq !== 2) {
		return data?.repeat?.weekly?.interval;
	}

	return rruleObj.interval;
};

export default computeWeeklyInterval;
