import { Frequency as RFrequency } from 'rrule';

import { ComputeRule } from './types';
import { Frequency } from '../../../types';

const computeFrequency: ComputeRule<Frequency> = (data, rruleObj) => {
	switch (rruleObj.freq) {
		case RFrequency.YEARLY:
			return 'YEARLY';
		case RFrequency.MONTHLY:
			return 'MONTHLY';
		case RFrequency.WEEKLY:
			return 'WEEKLY';
		case RFrequency.DAILY:
			return 'DAILY';
		case RFrequency.HOURLY:
			return 'HOURLY';
		default:
			return data?.repeat?.frequency;
	}
};

export default computeFrequency;
