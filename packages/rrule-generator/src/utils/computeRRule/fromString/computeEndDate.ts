import { ComputeRule } from './types';

const computeEndOnDate: ComputeRule<Date> = (data, rruleObj) => {
	if (!rruleObj.until) {
		return data?.end?.date;
	}

	return rruleObj.until;
};

export default computeEndOnDate;
