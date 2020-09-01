import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeMonthlyMode from '../computeMonthlyMode';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeMonthlyMode', () => {
	it('returns the default monthly mode when frequency is not MONTHLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=-1;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyMode(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.monthly?.mode);
	});

	it('returns "ON" when BYMONTHDAY is set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyMode(rRuleState, rruleObj);
		expect(result).toBe('ON');
	});

	it('returns "ON_THE" when BYMONTHDAY is NOT set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYSETPOS=1;BYDAY=MO;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeMonthlyMode(rRuleState, rruleObj);
		expect(result).toBe('ON_THE');
	});
});
