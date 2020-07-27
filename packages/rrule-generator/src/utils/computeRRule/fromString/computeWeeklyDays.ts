import { ByWeekday, Weekday } from 'rrule';

import { ComputeRule } from './types';
import { WeeklyRepeatOption } from '../../../types';

const computeWeeklyDays: ComputeRule<WeeklyRepeatOption['days']> = (data, rruleObj) => {
	let weekdays = [];

	if (rruleObj.freq !== 2) {
		return data.repeat.weekly.days;
	}

	if (rruleObj.byweekday) {
		weekdays = (rruleObj.byweekday as ByWeekday[]).map((weekday) => (weekday as Weekday).weekday);
	}

	return {
		MO: weekdays.includes(0),
		TU: weekdays.includes(1),
		WE: weekdays.includes(2),
		TH: weekdays.includes(3),
		FR: weekdays.includes(4),
		SA: weekdays.includes(5),
		SU: weekdays.includes(6),
	};
};

export default computeWeeklyDays;
