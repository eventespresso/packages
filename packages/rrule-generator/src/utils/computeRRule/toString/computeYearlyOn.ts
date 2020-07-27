import { Options } from 'rrule';

import { RRuleState } from '../../../state';
import { getByMonth } from './utils';

const computeYearlyOn = (on: RRuleState['repeat']['yearly']['on']): Partial<Options> => {
	return {
		bymonth: getByMonth(on.month),
		bymonthday: on.day as number,
	};
};

export default computeYearlyOn;
