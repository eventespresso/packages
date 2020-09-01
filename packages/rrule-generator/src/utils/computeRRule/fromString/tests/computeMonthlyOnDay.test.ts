import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeMonthlyOnDay from '../computeMonthlyOnDay';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeMonthlyOnDay', () => {
	it('returns the default monthly on day when frequency is not MONTHLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=TU,WE;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyOnDay(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.monthly?.on?.day);
	});

	it('returns the default monthly on day when bymonthday is not set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=9;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyOnDay(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.monthly?.on?.day);
	});

	it('returns the monthly on day as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		// 5
		let rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYMONTHDAY=5;COUNT=1;WKST=MO';
		let rruleObj = RRuleObjectFromString(rrule).origOptions;
		let result = computeMonthlyOnDay(rRuleState, rruleObj);
		expect(result).toBe(5);
		// 31
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=3;BYMONTHDAY=31;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeMonthlyOnDay(rRuleState, rruleObj);
		expect(result).toBe(31);
		// 1
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeMonthlyOnDay(rRuleState, rruleObj);
		expect(result).toBe(1);
	});
});
