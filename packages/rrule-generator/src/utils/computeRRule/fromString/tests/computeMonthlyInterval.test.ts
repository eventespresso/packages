import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeMonthlyInterval from '../computeMonthlyInterval';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeMonthlyInterval', () => {
	it('returns the default monthly interval when frequency is not MONTHLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=-1;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyInterval(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.monthly?.interval);
	});

	it('returns the interval as set in rrule string when mode is "ON"', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=4;BYMONTHDAY=3;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyInterval(rRuleState, rruleObj);
		expect(result).toBe(4);
	});

	it('returns the interval as set in rrule string when mode is "ON_THE"', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYSETPOS=1;BYDAY=WE;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyInterval(rRuleState, rruleObj);
		expect(result).toBe(7);
	});

	it('returns undefined when no interval is set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;BYSETPOS=1;BYDAY=WE;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyInterval(rRuleState, rruleObj);
		expect(result).toBeUndefined();
	});
});
