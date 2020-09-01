import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeYearlyOnMonthday from '../computeYearlyOnMonthday';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeYearlyOnMonthday', () => {
	it('returns the default yearly on month day when frequency is not YEARLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyOnMonthday(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.on?.day);
	});

	it('returns the default yearly on month day when bymonthday is not set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyOnMonthday(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.on?.day);
	});

	it('returns the yearly on month day as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		// 1 for Feb
		let rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=1;COUNT=1';
		let rruleObj = RRuleObjectFromString(rrule).origOptions;
		let result = computeYearlyOnMonthday(rRuleState, rruleObj);
		expect(result).toBe(1);
		// 28 for Feb
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=28;COUNT=1';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnMonthday(rRuleState, rruleObj);
		expect(result).toBe(28);
		// 29 for Feb
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=29;COUNT=1';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnMonthday(rRuleState, rruleObj);
		expect(result).toBe(29);
		// 31 for July
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=7;BYMONTHDAY=31;COUNT=1';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnMonthday(rRuleState, rruleObj);
		expect(result).toBe(31);
	});
});
