import { ComputeRule } from './types';

const computeEndDate: ComputeRule<Date> = (data, rruleObj) => {
	if (!rruleObj.until) {
		return data?.end?.date;
	}

	return rruleObj.until;
};

export default computeEndDate;
