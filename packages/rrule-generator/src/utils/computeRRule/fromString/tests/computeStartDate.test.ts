import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeStartDate from '../computeStartDate';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeStartDate', () => {
	it('returns the start date from generated rrule object', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200902T090000Z\nRRULE:FREQ=YEARLY;COUNT=3\n';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeStartDate(rRuleState, rruleObj);
		expect(result).toEqual(new Date(Date.UTC(2020, 8 /* Sep */, 2, 9)));
	});

	it('returns the start date from default state if rrule object does not have start date', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'RRULE:FREQ=YEARLY;COUNT=3\n';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeStartDate(rRuleState, rruleObj);
		expect(result).toEqual(rRuleState.start.date);
	});

	it('returns undefined when rrule object does not have start date and no default is provided in data', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'RRULE:FREQ=YEARLY;COUNT=3\n';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		// set start date to be null
		const result = computeStartDate({ ...rRuleState, start: null }, rruleObj);
		expect(result).toBeUndefined();
	});
});
