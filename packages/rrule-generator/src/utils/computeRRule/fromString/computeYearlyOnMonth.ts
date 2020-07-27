import { MONTHS } from '../../../constants';
import { ComputeRule } from './types';
import { Month } from '../../../types';

const computeYearlyOnMonth: ComputeRule<Month> = (data, rruleObj) => {
	if (rruleObj.freq !== 0 || !rruleObj.bymonthday) {
		return data.repeat?.yearly?.on?.month;
	}

	const MONTH_KEYS = Object.keys(MONTHS);

	if (typeof rruleObj.bymonth === 'number') {
		return MONTH_KEYS[rruleObj.bymonth - 1] as Month;
	}

	return MONTH_KEYS[rruleObj.bymonth[0] - 1] as Month;
};

export default computeYearlyOnMonth;
