import { ComputeRule } from './types';
import { EndMode } from '../../../types';

const computeEndMode: ComputeRule<EndMode> = (data, rruleObj) => {
	if (rruleObj.count || rruleObj.count === 0) {
		return 'AFTER';
	}

	if (rruleObj.until) {
		return 'ON_DATE';
	}

	return 'NEVER';
};

export default computeEndMode;
