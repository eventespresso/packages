import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeWeeklyDays from '../computeWeeklyDays';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeWeeklyDays', () => {
	it('returns the default weekly days when frequency is not WEEKLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=-1;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeWeeklyDays(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.weekly?.days);
	});

	it('returns the default weekly days when weekdays are not set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=WEEKLY;INTERVAL=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeWeeklyDays(rRuleState, rruleObj);
		Object.entries(result).forEach(([, isDayActive]) => {
			expect(isDayActive).toBe(false);
		});
	});

	it('returns the weekdays as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		const weeklyDays = ['WE', 'TH', 'SA'];
		const rrule =
			'DTSTART:20200901T092307Z\nRRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=' + weeklyDays.join(',') + ';COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeWeeklyDays(rRuleState, rruleObj);
		Object.entries(result).forEach(([day, isDayActive]) => {
			expect(isDayActive).toBe(weeklyDays.includes(day));
		});
	});
});
