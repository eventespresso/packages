import { ComputeRule } from './types';
import { Which } from '../../../types';

const computeMonthlyOnTheWhich: ComputeRule<Which> = (data, rruleObj) => {
	if (rruleObj.freq !== 1 || !rruleObj.bysetpos) {
		return data?.repeat?.monthly?.onThe?.which;
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
			return data?.repeat?.monthly?.onThe?.which;
		}
	}
};

export default computeMonthlyOnTheWhich;
