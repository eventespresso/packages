import { Frequency } from 'rrule';

import { ComputeRule } from './types';
import { RepeatMode } from '../../../types';

const computeMonthlyMode: ComputeRule<RepeatMode> = (data, rruleObj) => {
	if (rruleObj.freq !== Frequency.MONTHLY) {
		return data?.repeat?.monthly?.mode;
	}

	if (rruleObj.bymonthday) {
		return 'ON';
	}

	return 'ON_THE';
};

export default computeMonthlyMode;
