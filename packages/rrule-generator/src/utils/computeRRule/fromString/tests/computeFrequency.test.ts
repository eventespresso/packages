import { rrulestr as RRuleObjectFromString } from 'rrule';

import computeFrequency from '../computeFrequency';
import { getDefaultRRuleState } from '../../../misc';

describe('fromString.computeFrequency', () => {
	it('returns "YEARLY" for rrule string with yearly frequency', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'RRULE:FREQ=YEARLY';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeFrequency(rRuleState, rruleObj);
		expect(result).toBe('YEARLY');
	});

	it('returns "MONTHLY" for rrule string with monthly frequency', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'RRULE:FREQ=MONTHLY';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeFrequency(rRuleState, rruleObj);
		expect(result).toBe('MONTHLY');
	});

	it('returns "WEEKLY" for rrule string with weekly frequency', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'RRULE:FREQ=WEEKLY';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeFrequency(rRuleState, rruleObj);
		expect(result).toBe('WEEKLY');
	});

	it('returns "DAILY" for rrule string with daily frequency', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'RRULE:FREQ=DAILY';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeFrequency(rRuleState, rruleObj);
		expect(result).toBe('DAILY');
	});

	it('returns "HOURLY" for rrule string with hourly frequency', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'RRULE:FREQ=HOURLY';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeFrequency(rRuleState, rruleObj);
		expect(result).toBe('HOURLY');
	});

	it('returns the default frequency for rrule string with no frequency set', () => {
		const rRuleState = getDefaultRRuleState();
		const rrule = 'DTSTART:20200902T090000Z\nRRULE:COUNT=3\n';
		const rruleObj = RRuleObjectFromString(rrule).origOptions;

		const result = computeFrequency(rRuleState, rruleObj);
		expect(result).toBe(rRuleState?.repeat?.frequency);
	});
});
