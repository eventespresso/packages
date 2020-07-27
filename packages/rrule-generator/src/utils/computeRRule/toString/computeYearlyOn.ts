import { Options } from 'rrule';
import { parse } from 'date-fns';

import { RRuleState } from '../../../state';

const computeYearlyOn = (on: RRuleState['repeat']['yearly']['on']): Partial<Options> => {
	// parse 'Jan', 'Feb'
	const date = parse(on.month, 'MMM', new Date());
	return {
		bymonth: date.getMonth(),
		bymonthday: on.day as number,
	};
};

export default computeYearlyOn;
