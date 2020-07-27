import { Options } from 'rrule';

import { RRuleState } from '../../../state';
import { get_bymonth } from './utils';

const computeYearlyOn = (on: RRuleState['repeat']['yearly']['on']): Partial<Options> => {
	return {
		bymonth: get_bymonth(on.month),
		bymonthday: on.day as number,
	};
};

export default computeYearlyOn;
