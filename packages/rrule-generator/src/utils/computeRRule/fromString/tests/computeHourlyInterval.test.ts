import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeHourlyInterval from '../computeHourlyInterval';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeHourlyInterval', () => {
	it('returns the default hourly interval when frequency is not HOURLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=-1;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeHourlyInterval(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.hourly?.interval);
	});

	it('returns the hourly interval as set in rrule string', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=HOURLY;INTERVAL=11;UNTIL=20200922T093924Z;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeHourlyInterval(rRuleState, rruleObj);
		expect(result).toBe(11);
	});

	it('returns undefined when no interval is set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=HOURLY;UNTIL=20200922T093924Z;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeHourlyInterval(rRuleState, rruleObj);
		expect(result).toBeUndefined();
	});
});
