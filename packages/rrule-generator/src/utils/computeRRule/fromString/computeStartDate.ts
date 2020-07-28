import { ComputeRule } from './types';

const computeStartDate: ComputeRule<Date> = (data, rruleObj) => {
	if (!rruleObj.dtstart) {
		return data?.start?.date;
	}

	return rruleObj.dtstart;
};
export default computeStartDate;
