import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeYearlyMode from '../computeYearlyMode';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeYearlyMode', () => {
	it('returns the default yearly mode when frequency is not YEARLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyMode(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.mode);
	});

	it('returns the default yearly mode when bymonth is not set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTHDAY=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyMode(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.yearly?.mode);
	});

	it('returns "ON" when BYMONTHDAY is set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyMode(rRuleState, rruleObj);
		expect(result).toBe('ON');
	});

	it('returns "ON_THE" when BYMONTHDAY is NOT set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule =
			'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=1;BYDAY=MO;BYMONTH=1;COUNT=1;WKST=MO;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeYearlyMode(rRuleState, rruleObj);
		expect(result).toBe('ON_THE');
	});
});
