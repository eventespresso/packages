import { Options } from 'rrule';

import { RRuleState } from '../../../state';
import { get_byweekday, get_bysetpos, get_bymonth } from '../utils';

const computeYearlyOnThe = (onThe: RRuleState['repeat']['yearly']['onThe']): Partial<Options> => {
	return {
		bysetpos: get_bysetpos(onThe.which),
		byweekday: get_byweekday(onThe.day),
		bymonth: get_bymonth(onThe.month),
	};
};

export default computeYearlyOnThe;
