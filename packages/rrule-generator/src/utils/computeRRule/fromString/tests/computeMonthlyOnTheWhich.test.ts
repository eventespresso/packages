import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeMonthlyOnTheWhich from '../computeMonthlyOnTheWhich';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeMonthlyOnTheWhich', () => {
	it('returns the default monthly on the which when frequency is not MONTHLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=-1;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.monthly?.onThe?.which);
	});

	it('returns the default monthly on the which when bysetpos is not set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYDAY=TU;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.monthly?.onThe?.which);
	});

	it('returns the monthly on the which as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		// FIRST
		let rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYSETPOS=1;BYDAY=TU;COUNT=1;WKST=MO';
		let rruleObj = RRuleObjectFromString(rrule).origOptions;
		let result = computeMonthlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe('FIRST');
		// SECOND
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYSETPOS=2;BYDAY=MO;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeMonthlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe('SECOND');
		// THIRD
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYSETPOS=3;BYDAY=MO;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeMonthlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe('THIRD');
		// FOURTH
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYSETPOS=4;BYDAY=MO;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeMonthlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe('FOURTH');
		// LAST
		rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=7;BYSETPOS=-1;BYDAY=MO;COUNT=1;WKST=MO';
		rruleObj = RRuleObjectFromString(rrule).origOptions;
		result = computeMonthlyOnTheWhich(rRuleState, rruleObj);
		expect(result).toBe('LAST');
	});
});
