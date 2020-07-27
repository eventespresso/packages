import { Frequency } from 'rrule';

import { ComputeRule } from './types';
import { Which } from '../../../types';
import { getOnTheWhich } from './utils';

const computeMonthlyOnTheWhich: ComputeRule<Which> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.MONTHLY || !rruleObj.bysetpos) {
		return data?.repeat?.monthly?.onThe?.which;
	}
	return getOnTheWhich(rruleObj.bysetpos, data?.repeat?.monthly?.onThe?.which);
};

export default computeMonthlyOnTheWhich;
