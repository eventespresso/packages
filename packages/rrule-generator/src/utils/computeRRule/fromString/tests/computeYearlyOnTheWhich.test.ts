import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeYearlyOnTheWhich from '../computeYearlyOnTheWhich';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeYearlyOnTheWhich', () => {
	it('returns the default yearly on the which when frequency is not YEARLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.onThe?.which);
	});

	it('returns the default yearly on the which when bysetpos is not set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.onThe?.which);
	});

	it('returns the yearly on the which as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		// FIRST
		let rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=1;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		let rruleObj = RRuleObjectFromString(rrule).origOptions;
		let result = computeYearlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe('FIRST');
		// SECOND
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=2;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe('SECOND');
		// THIRD
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=3;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe('THIRD');
		// FOURTH
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=4;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe('FOURTH');
		// LAST
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=-1;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeYearlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe('LAST');
	});
});
