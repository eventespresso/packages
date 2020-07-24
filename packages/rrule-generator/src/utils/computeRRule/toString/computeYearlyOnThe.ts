import { Options } from 'rrule';

import { MONTHS } from '../../../constants/index';
import { RRuleState } from '../../../state';

const computeYearlyOnThe = (onThe: RRuleState['repeat']['yearly']['onThe']): Partial<Options> => {
	const repeat: Partial<Options> = {};

	switch (onThe.which) {
		case 'FIRST':
			repeat.bysetpos = 1;
			break;
		case 'SECOND':
			repeat.bysetpos = 2;
			break;
		case 'THIRD':
			repeat.bysetpos = 3;
			break;
		case 'FOURTH':
			repeat.bysetpos = 4;
			break;
		case 'LAST':
			repeat.bysetpos = -1;
			break;
		default:
			break;
	}

	switch (onThe.day) {
		case 'MO':
			repeat.byweekday = [0];
			break;
		case 'TU':
			repeat.byweekday = [1];
			break;
		case 'WE':
			repeat.byweekday = [2];
			break;
		case 'TH':
			repeat.byweekday = [3];
			break;
		case 'FR':
			repeat.byweekday = [4];
			break;
		case 'SA':
			repeat.byweekday = [5];
			break;
		case 'SU':
			repeat.byweekday = [6];
			break;
		case 'DAY':
			repeat.byweekday = [0, 1, 2, 3, 4, 5, 6];
			break;
		case 'WEEKDAY':
			repeat.byweekday = [0, 1, 2, 3, 4];
			break;
		case 'WEEKEND_DAY':
			repeat.byweekday = [5, 6];
			break;
		default:
			break;
	}

	repeat.bymonth = MONTHS.indexOf(onThe.month) + 1;

	return repeat;
};

export default computeYearlyOnThe;
