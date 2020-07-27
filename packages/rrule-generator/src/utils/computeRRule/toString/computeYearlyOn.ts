import { Options } from 'rrule';

import { MONTHS } from '../../../constants';
import { RRuleState } from '../../../state';

const computeYearlyOn = (on: RRuleState['repeat']['yearly']['on']): Partial<Options> => ({
	bymonth: Object.keys(MONTHS).indexOf(on.month) + 1,
	bymonthday: on.day as number,
});

export default computeYearlyOn;
