import { RRule } from 'rrule';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';

describe('toString.computeStart', () => {
	it('contains default value for DTSTART in rrule string when start date is in state', () => {
		const rRuleState = getDefaultRRuleState();

		const result = computeRRule(rRuleState, DEFAULT_CONFIG);
		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('dtstart');
		expect(parsedRRule.dtstart).toBeInstanceOf(Date);
	});

	it('contains default value for DTSTART in rrule string when start date is NOT in state', () => {
		const rRuleState = getDefaultRRuleState();

		const result = computeRRule({ ...rRuleState, start: {} }, DEFAULT_CONFIG);
		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('dtstart');
		expect(parsedRRule.dtstart).toBeInstanceOf(Date);
	});

	it('contains default value for DTSTART in rrule string when start date is null or undefined', () => {
		const rRuleState = getDefaultRRuleState();

		[null, undefined].forEach((date) => {
			const result = computeRRule({ ...rRuleState, start: { date } }, DEFAULT_CONFIG);
			// parse the generated string
			const parsedRRule = RRule.parseString(result);

			expect(parsedRRule).toHaveProperty('dtstart');
			expect(parsedRRule.dtstart).toBeInstanceOf(Date);
		});
	});

	it('contains the passed value for DTSTART in rrule string', () => {
		const rRuleState = getDefaultRRuleState();

		const inputDate = new Date(Date.UTC(2020, 8 /* Sep */, 2, 9));

		const result = computeRRule({ ...rRuleState, start: { date: inputDate } }, DEFAULT_CONFIG);
		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('dtstart');
		expect(parsedRRule.dtstart).toBeInstanceOf(Date);
		expect(parsedRRule.dtstart).toEqual(inputDate);
	});
});
