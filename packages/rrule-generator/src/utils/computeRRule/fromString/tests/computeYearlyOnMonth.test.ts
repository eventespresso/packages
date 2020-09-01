import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeYearlyOnMonth from '../computeYearlyOnMonth';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeYearlyOnMonth', () => {
	it('returns the default yearly on month when frequency is not YEARLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyOnMonth(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.on?.month);
	});

	it('returns the default yearly on month when bymonthday is not set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyOnMonth(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.on?.month);
	});

	it('returns the yearly on month as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		// Jan
		let rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		let rruleObj = RRuleObjectFromString(rrule).origOptions;
		let result = computeYearlyOnMonth(rRuleState, rruleObj);
		expect(result).toBe('Jan');

		// Feb
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=1;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnMonth(rRuleState, rruleObj);
		expect(result).toBe('Feb');

		// May
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=1;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnMonth(rRuleState, rruleObj);
		expect(result).toBe('May');

		// Dec
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=1;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnMonth(rRuleState, rruleObj);
		expect(result).toBe('Dec');
	});
});
