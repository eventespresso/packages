import { Options } from 'rrule';

import { RRuleState } from '../../../state';
import { get_bysetpos, get_byweekday } from '../utils';

const computeMonthlyOnThe = (onThe: RRuleState['repeat']['monthly']['onThe']): Partial<Options> => {
	return {
		bysetpos: get_bysetpos(onThe.which),
		byweekday: get_byweekday(onThe.day),
	};
};

export default computeMonthlyOnThe;
