import { ComputeRule } from './types';
import { EndMode } from '../../../types';
import { RRuleConfig } from '../../../types';

const computeEndMode: ComputeRule<EndMode> = (data, rruleObj, config: RRuleConfig) => {
	if (rruleObj.count || (rruleObj.count === 0 && config.endModes.includes('AFTER'))) {
		return 'AFTER';
	}

	if (rruleObj.until && config.endModes.includes('ON_DATE')) {
		return 'ON_DATE';
	}

	if (config.endModes.includes('NEVER')) {
		return 'NEVER';
	}

	return config.endModes[0];
};

export default computeEndMode;
