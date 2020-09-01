import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeMonthlyOnTheDay from '../computeMonthlyOnTheDay';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeMonthlyOnTheDay', () => {
	it('returns the default monthly on the day when frequency is not MONTHLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyOnTheDay(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.monthly?.onThe?.day);
	});

	it('returns the default monthly on the day when byweekday is not set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYSETPOS=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyOnTheDay(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.monthly?.onThe?.day);
	});

	it('returns the monthly on the day as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		// FR
		let rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYSETPOS=2;BYDAY=FR;COUNT=1;WKST=MO';
		let rruleObj = RRuleObjectFromString(rrule).origOptions;
		let result = computeMonthlyOnTheDay(rRuleState, rruleObj);
		expect(result).toBe('FR');
		// TU
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYSETPOS=3;BYDAY=TU;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeMonthlyOnTheDay(rRuleState, rruleObj);
		expect(result).toBe('TU');
		// SA
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYSETPOS=3;BYDAY=SA;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeMonthlyOnTheDay(rRuleState, rruleObj);
		expect(result).toBe('SA');
	});
});
