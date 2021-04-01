import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeEndMode from '../computeEndMode';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';

describe('fromString.computeEndMode', () => {
	it('returns "AFTER" when COUNT is set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=9;COUNT=19;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeEndMode(rRuleState, rruleObj, DEFAULT_CONFIG);
		expect(result).toBe('AFTER');
	});

	it('returns "ON_DATE" when UNTIL is set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=9;UNTIL=20200922T093924Z;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeEndMode(rRuleState, rruleObj, DEFAULT_CONFIG);
		expect(result).toBe('ON_DATE');
	});

	it('returns "NEVER" when no end is specified', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=9;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeEndMode(rRuleState, rruleObj, DEFAULT_CONFIG);
		expect(result).toBe('NEVER');
	});
});
