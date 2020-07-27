import { WeekdayStr } from 'rrule';
import { ALL_WEEKDAYS } from 'rrule/dist/esm/src/weekday';
import { parse, getMonth } from 'date-fns';

import { Which, Day, Month } from '../../../types';

export const getBySetPos = (which: Which): number => {
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

export const getByWeekday = (day: Day): Array<WeekdayStr> => {
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

export const getByMonth = (month: Month): number => {
	// parse 'Jan', 'Feb'
	const date = parse(month, 'MMM', new Date());

	// +1 because rrule bymonth starts from 1, not from 0
	return getMonth(date) + 1;
};
