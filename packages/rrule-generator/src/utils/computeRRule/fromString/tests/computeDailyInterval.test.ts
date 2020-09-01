import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeDailyInterval from '../computeDailyInterval';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeDailyInterval', () => {
	it('returns the default daily interval when frequency is not DAILY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=-1;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeDailyInterval(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.daily?.interval);
	});

	it('returns the daily interval as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=9;UNTIL=20200922T093924Z;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeDailyInterval(rRuleState, rruleObj);
		expect(result).toBe(9);
	});
});
