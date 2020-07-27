import { Options } from 'rrule';

import { RRuleState } from '../../../state';
import { getByWeekday, getBySetPos, getByMonth } from './utils';

const computeYearlyOnThe = (onThe: RRuleState['repeat']['yearly']['onThe']): Partial<Options> => {
	return {
		bysetpos: getBySetPos(onThe.which),
		byweekday: getByWeekday(onThe.day),
		bymonth: getByMonth(onThe.month),
	};
};

export default computeYearlyOnThe;
