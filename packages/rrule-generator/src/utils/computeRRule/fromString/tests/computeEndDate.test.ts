import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeEndDate from '../computeEndDate';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeEndDate', () => {
	it('returns the end date from generated rrule object', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=9;UNTIL=20200922T093924Z;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeEndDate(rRuleState, rruleObj);
		expect(result).toEqual(new Date(Date.UTC(2020, 8 /* Sep */, 22, 9, 39, 24)));
	});

	it('returns the end date from default state if rrule object does not have end date', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=9;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeEndDate(rRuleState, rruleObj);
		expect(result).toEqual(rRuleState.end.date);
	});

	it('returns the end date from default state if end mode is not "ON_DATE"', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=9;COUNT=19;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeEndDate(rRuleState, rruleObj);
		expect(result).toEqual(rRuleState.end.date);
	});

	it('returns undefined when rrule object does not have start date and no default is provided in data', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200901T092307Z\nRRULE:FREQ=DAILY;INTERVAL=9;WKST=MO';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		// set start date to be null
		const result = computeEndDate({ ...rRuleState, end: null }, rruleObj);
		expect(result).toBeUndefined();
	});
});
