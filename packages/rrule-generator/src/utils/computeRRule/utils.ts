import { WeekdayStr } from 'rrule';
import { ALL_WEEKDAYS } from 'rrule/dist/esm/src/weekday';

import { Which, Day, Month } from '../../types';
import { parse } from 'date-fns';

export const get_bysetpos = (which: Which): number => {
	let bysetpos: number;
	switch (which) {
		case 'FIRST':
			bysetpos = 1;
			break;
		case 'SECOND':
			bysetpos = 2;
			break;
		case 'THIRD':
			bysetpos = 3;
			break;
		case 'FOURTH':
			bysetpos = 4;
			break;
		case 'LAST':
			bysetpos = -1;
			break;
		default:
			break;
	}
	return bysetpos;
};

export const get_byweekday = (day: Day): Array<WeekdayStr> => {
	let byweekday: Array<WeekdayStr>;
	switch (day) {
		case 'DAY':
			byweekday = ALL_WEEKDAYS;
			break;
		case 'WEEKDAY':
			byweekday = ['MO', 'TU', 'WE', 'TH', 'FR'];
			break;
		case 'WEEKEND_DAY':
			byweekday = ['SA', 'SU'];
			break;
		default:
			// if it's 'MO', 'TU', 'WE'...
			if (ALL_WEEKDAYS.includes(day as WeekdayStr)) {
				byweekday = [day as WeekdayStr];
			}
			break;
	}
	return byweekday;
};

export const get_bymonth = (month: Month): number => {
	// parse 'Jan', 'Feb'
	const date = parse(month, 'MMM', new Date());

	return date.getMonth();
};
