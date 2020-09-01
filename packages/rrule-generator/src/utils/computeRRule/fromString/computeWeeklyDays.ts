import { Weekday, Frequency } from 'rrule';

import { ComputeRule } from './types';
import { WeeklyRepeatOption } from '../../../types';
import { ALL_WEEKDAYS } from '../toString/utils';

const computeWeeklyDays: ComputeRule<WeeklyRepeatOption['days']> = (data, rruleObj) => {
	let weekdays = [];

	if (rruleObj.freq !== Frequency.WEEKLY) {
		return data?.repeat?.weekly?.days;
	}

	if (rruleObj.byweekday) {
		weekdays = (rruleObj.byweekday as Weekday[]).map((weekday) => weekday.weekday);
	}

	/**
	 * convert to
	 * {
	 *     MO: true,
	 *     TU: true,
	 *     WE: false,
	 *     ...
	 * }
	 */
	return ALL_WEEKDAYS.reduce((days, weekdayStr) => {
		const isDayActive = weekdays.includes(Weekday.fromStr(weekdayStr).weekday);
		return { ...days, [weekdayStr]: isDayActive };
	}, {});
};

export default computeWeeklyDays;
