import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeYearlyOnTheMonthday from '../computeYearlyOnTheMonthday';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeYearlyOnTheMonthday', () => {
	it('returns the default yearly on the month day when frequency is not YEARLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyOnTheMonthday(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.onThe?.day);
	});

	it('returns the default yearly on the month day when byweekday is not set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=2;BYMONTH=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyOnTheMonthday(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.onThe?.day);
	});

	it('returns the yearly on the month day as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		// TU
		let rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=2;BYDAY=TU;BYMONTH=2;COUNT=1;WKST=MO';
		let rruleObj = RRuleObjectFromString(rrule).origOptions;
		let result = computeYearlyOnTheMonthday(rRuleState, rruleObj);
		expect(result).toBe('TU');
		// WE
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=2;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnTheMonthday(rRuleState, rruleObj);
		expect(result).toBe('WE');
		// SA
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=2;BYDAY=SA;BYMONTH=2;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnTheMonthday(rRuleState, rruleObj);
		expect(result).toBe('SA');
	});
});
