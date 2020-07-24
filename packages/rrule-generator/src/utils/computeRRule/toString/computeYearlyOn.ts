import { Options } from 'rrule';

import { MONTHS } from '../../../constants/index';
import { RRuleState } from '../../../state';

const computeYearlyOn = (on: RRuleState['repeat']['yearly']['on']): Partial<Options> => ({
	bymonth: MONTHS.indexOf(on.month) + 1,
	bymonthday: on.day as number,
});

export default computeYearlyOn;
