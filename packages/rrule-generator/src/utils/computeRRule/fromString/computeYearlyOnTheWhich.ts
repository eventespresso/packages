import { Frequency } from 'rrule';

import { ComputeRule } from './types';
import { Which } from '../../../types';
import { getOnTheWhich } from './utils';

const computeYearlyOnTheWhich: ComputeRule<Which> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.YEARLY || !rruleObj.bysetpos) {
		return data?.repeat?.yearly?.onThe?.which;
	}

	return getOnTheWhich(rruleObj.bysetpos, data?.repeat?.yearly?.onThe?.which);
};

export default computeYearlyOnTheWhich;
