import { ComputeRule } from './types';
import { Frequency } from '../../../types';

const computeFrequency: ComputeRule<Frequency> = (data, rruleObj) => {
	switch (rruleObj.freq) {
		case 0: {
			return 'YEARLY';
		}
		case 1: {
			return 'MONTHLY';
		}
		case 2: {
			return 'WEEKLY';
		}
		case 3: {
			return 'DAILY';
		}
		case 4: {
			return 'HOURLY';
		}
		default: {
			return data.repeat.frequency;
		}
	}
};

export default computeFrequency;
