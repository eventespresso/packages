import { ComputeRule } from './types';
import { Which } from '../../../types';

const computeYearlyOnTheWhich: ComputeRule<Which> = (data, rruleObj) => {
	if (rruleObj.freq !== 0 || !rruleObj.byweekday) {
		return data?.repeat?.yearly?.onThe?.which;
	}

	const bysetpos = typeof rruleObj.bysetpos === 'number' ? rruleObj.bysetpos : rruleObj.bysetpos[0];

	switch (bysetpos) {
		case 1: {
			return 'FIRST';
		}
		case 2: {
			return 'SECOND';
		}
		case 3: {
			return 'THIRD';
		}
		case 4: {
			return 'FOURTH';
		}
		case -1: {
			return 'LAST';
		}
		default: {
			return data?.repeat?.yearly?.onThe?.which;
		}
	}
};

export default computeYearlyOnTheWhich;
