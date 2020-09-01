import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeYearlyOnTheMonth from '../computeYearlyOnTheMonth';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeYearlyOnTheMonth', () => {
	it('returns the default yearly on the month when frequency is not YEARLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyOnTheMonth(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.onThe?.month);
	});

	it('returns the default yearly on month when bymonth is not set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=2;BYDAY=MO;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyOnTheMonth(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.onThe?.month);
	});

	it('returns the yearly on the month as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		// Jan
		let rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=2;BYDAY=MO;BYMONTH=1;COUNT=1;WKST=MO';
		let rruleObj = RRuleObjectFromString(rrule).origOptions;
		let result = computeYearlyOnTheMonth(rRuleState, rruleObj);
		expect(result).toBe('Jan');

		// Feb
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=2;BYDAY=MO;BYMONTH=2;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnTheMonth(rRuleState, rruleObj);
		expect(result).toBe('Feb');

		// May
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=2;BYDAY=MO;BYMONTH=5;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnTheMonth(rRuleState, rruleObj);
		expect(result).toBe('May');

		// Dec
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=2;BYDAY=MO;BYMONTH=12;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnTheMonth(rRuleState, rruleObj);
		expect(result).toBe('Dec');
	});
});
