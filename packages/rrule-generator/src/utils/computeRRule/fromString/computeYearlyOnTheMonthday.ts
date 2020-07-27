import { ByWeekday, Weekday } from 'rrule';

import { ComputeRule } from './types';
import { Day } from '../../../types';

const computeYearlyOnTheMonthday: ComputeRule<Day> = (data, rruleObj) => {
	if (rruleObj.freq !== 0 || !rruleObj.byweekday) {
		return data.repeat.yearly.onThe.day;
	}

	const weekdays = (rruleObj.byweekday as ByWeekday[]).map((weekday) => (weekday as Weekday).weekday).join(',');

	switch (weekdays) {
		case '0': {
			return 'MO';
		}
		case '1': {
			return 'TU';
		}
		case '2': {
			return 'WE';
		}
		case '3': {
			return 'TH';
		}
		case '4': {
			return 'FR';
		}
		case '5': {
			return 'SA';
		}
		case '6': {
			return 'SU';
		}
		case '0,1,2,3,4,5,6': {
			return 'DAY';
		}
		case '0,1,2,3,4': {
			return 'WEEKDAY';
		}
		case '5,6': {
			return 'WEEKEND_DAY';
		}
		default: {
			return data?.repeat?.yearly?.onThe?.day;
		}
	}
};

export default computeYearlyOnTheMonthday;
