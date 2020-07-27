import { Options, Weekday } from 'rrule';

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
		// compute week start day from string.
		options.wkst = Weekday.fromStr(weekStartsOn);
	}

	return options;
};

export default computeOptions;
