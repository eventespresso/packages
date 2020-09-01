import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeWeeklyInterval from '../computeWeeklyInterval';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeWeeklyInterval', () => {
	it('returns the default weekly interval when frequency is not WEEKLY', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=YEARLY;BYSETPOS=-1;BYDAY=WE;BYMONTH=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeWeeklyInterval(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.weekly?.interval);
	});

	it('returns the weekly interval as set in rrule string when no weekday is set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=WEEKLY;INTERVAL=2;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeWeeklyInterval(rRuleState, rruleObj);
		expect(result).toBe(2);
	});

	it('returns the weekly interval as set in rrule string when weekday is set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=WEEKLY;INTERVAL=8;BYDAY=WE,TH,SA;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeWeeklyInterval(rRuleState, rruleObj);
		expect(result).toBe(8);
	});

	it('returns undefined when no interval is set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=WEEKLY;BYDAY=WE,TH,SA;COUNT=1;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeWeeklyInterval(rRuleState, rruleObj);
		expect(result).toBeUndefined();
	});
});
