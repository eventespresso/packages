import RRule, { Options } from 'rrule';

import { RRuleConfig } from '../../../types';

type ComputeOptionsArgs = {
	weekStartsOn: RRuleConfig['weekStartsOn'];
	hideStart: boolean;
};

const computeOptions = ({ hideStart, weekStartsOn }: ComputeOptionsArgs): Partial<Options> => {
	const options: Partial<Options> = {};

	if (hideStart) {
		options.dtstart = null;
	}

	if (weekStartsOn) {
		options.wkst = RRule?.[weekStartsOn];
	}

	return options;
};

export default computeOptions;
