import { MONTHS } from '../../../constants';
import { ComputeRule } from './types';
import { Month } from '../../../types';

const computeYearlyOnTheMonth: ComputeRule<Month> = (data, rruleObj) => {
	if (rruleObj.freq !== 0 || !rruleObj.byweekday) {
		return data.repeat.yearly.onThe.month;
	}

	const MONTH_KEYS = Object.keys(MONTHS);

	if (typeof rruleObj.bymonth === 'number') {
		return MONTH_KEYS[rruleObj.bymonth - 1] as Month;
	}

	return MONTH_KEYS[rruleObj.bymonth[0] - 1] as Month;
};

export default computeYearlyOnTheMonth;
