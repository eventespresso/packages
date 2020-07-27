import { Options } from 'rrule';

import { RRuleState } from '../../../state';
import { getBySetPos, getByWeekday } from './utils';

const computeMonthlyOnThe = (onThe: RRuleState['repeat']['monthly']['onThe']): Partial<Options> => {
	return {
		bysetpos: getBySetPos(onThe.which),
		byweekday: getByWeekday(onThe.day),
	};
};

export default computeMonthlyOnThe;
