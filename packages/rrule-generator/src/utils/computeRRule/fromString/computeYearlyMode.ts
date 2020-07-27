import { ComputeRule } from './types';
import { RepeatMode } from '../../../types';

const computeYearlyMode: ComputeRule<RepeatMode> = (data, rruleObj) => {
	if (rruleObj.freq !== 0 || !rruleObj.bymonth) {
		return data.repeat.yearly.mode;
	}

	if (rruleObj.bymonthday) {
		return 'ON';
	}

	return 'ON_THE';
};

export default computeYearlyMode;
