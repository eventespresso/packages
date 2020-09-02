import { RRule } from 'rrule';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';
import { RRuleState } from 'packages/rrule-generator/src/state';

describe('toString.computeEnd', () => {
	it('contains value for "count" in rrule string for default state', () => {
		const rRuleState = getDefaultRRuleState();

		const result = computeRRule(rRuleState, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('count');
		expect(parsedRRule).not.toHaveProperty('until');
		expect(parsedRRule.count).toBe(rRuleState?.end?.after);
	});
	it('contains value for "count" in rrule string when end mode is "AFTER"', () => {
		const rRuleState = getDefaultRRuleState();

		const end: RRuleState['end'] = {
			...rRuleState.end,
			mode: 'AFTER',
		};

		const result = computeRRule({ ...rRuleState, end }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('count');
		expect(parsedRRule).not.toHaveProperty('until');
		expect(parsedRRule.count).toBe(rRuleState?.end?.after);
	});
	it('contains value for "until" in rrule string when end mode is "AFTER"', () => {
		const rRuleState = getDefaultRRuleState();

		const end: RRuleState['end'] = {
			...rRuleState.end,
			mode: 'ON_DATE',
		};

		const result = computeRRule({ ...rRuleState, end }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('until');
		expect(parsedRRule).not.toHaveProperty('count');
		expect(parsedRRule.until).toBeInstanceOf(Date);
	});

	it('does not contain value for "count" or "until" in rrule string when end mode is null or undefined', () => {
		const rRuleState = getDefaultRRuleState();

		[null, undefined].forEach((mode) => {
			const end: RRuleState['end'] = {
				mode,
			};

			const result = computeRRule({ ...rRuleState, end }, DEFAULT_CONFIG);

			// parse the generated string
			const parsedRRule = RRule.parseString(result);

			expect(parsedRRule).not.toHaveProperty('until');
			expect(parsedRRule).not.toHaveProperty('count');
		});
	});
});
