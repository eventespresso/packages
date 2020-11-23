import { Options, Weekday } from 'rrule';
import { format, setMonth } from 'date-fns';

import { NOW } from '@eventespresso/constants';
import { Month, Day, Which } from '../../../types';

export const getOnMonth = (bymonth: Options['bymonth']): Month => {
	let month: number;
	if (typeof bymonth === 'number') {
		// rrule bymonth starts from 1, not from 0
		month = bymonth - 1;
	} else {
		month = bymonth[0] - 1;
	}
	const date = setMonth(NOW, month);

	return format(date, 'MMM') as Month;
};

export const getOnTheDay = (byweekday: Options['byweekday'], defaultValue?: Day): Day => {
	const weekdays = (byweekday as Weekday[]).map((weekday) => weekday.weekday).join(',');

	switch (weekdays) {
		case '0':
			return 'MO';
		case '1':
			return 'TU';
		case '2':
			return 'WE';
		case '3':
			return 'TH';
		case '4':
			return 'FR';
		case '5':
			return 'SA';
		case '6':
			return 'SU';
		case '0,1,2,3,4,5,6':
			return 'DAY';
		case '0,1,2,3,4':
			return 'WEEKDAY';
		case '5,6':
			return 'WEEKEND_DAY';
		default:
			return defaultValue;
	}
};

export const getOnTheWhich = (bysetpos: Options['bysetpos'], defaultValue?: Which): Which => {
	const _bysetpos = typeof bysetpos === 'number' ? bysetpos : bysetpos[0];

	switch (_bysetpos) {
		case 1:
			return 'FIRST';
		case 2:
			return 'SECOND';
		case 3:
			return 'THIRD';
		case 4:
			return 'FOURTH';
		case -1:
			return 'LAST';
		default:
			return defaultValue;
	}
};
