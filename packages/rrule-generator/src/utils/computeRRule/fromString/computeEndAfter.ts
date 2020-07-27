import { ComputeRule } from './types';

const computeEndAfter: ComputeRule<number> = (data, rruleObj) => {
	if (!rruleObj.count && rruleObj.count !== 0) {
		return data.end.after;
	}

	return rruleObj.count;
};

export default computeEndAfter;
