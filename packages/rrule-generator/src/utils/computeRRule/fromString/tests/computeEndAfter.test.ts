import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeEndAfter from '../computeEndAfter';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';

describe('fromString.computeEndAfter', () => {
	it('returns the default end after when end mode is not after', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=9;UNTIL=20200922T093924Z;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeEndAfter(rRuleState, rruleObj, DEFAULT_CONFIG);
		expect(result).toBe(rRuleState?.end?.after);
	});

	it('returns the end after as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=9;COUNT=19;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeEndAfter(rRuleState, rruleObj, DEFAULT_CONFIG);
		expect(result).toBe(19);
	});
});
