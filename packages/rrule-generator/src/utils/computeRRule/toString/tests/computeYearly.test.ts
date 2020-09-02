import { RRule, Frequency as RRuleFrequency } from 'rrule';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';
import { RRuleState } from '../../../../state';

describe('toString.computeYearly', () => {
	it('contains the passed YEARLY value for frequency in rrule string', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'YEARLY',
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('freq');
		expect(parsedRRule.freq).toBe(RRuleFrequency.YEARLY);
	});

	it('contains value for bymonth in rrule string when YEARLY mode', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'YEARLY',
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('bymonth');
	});

	it('does not contain YEARLY value for frequency in rrule string when frequency is not YEARLY', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'MONTHLY',
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('freq');
		expect(parsedRRule.freq).toBe(RRuleFrequency.MONTHLY);
		expect(parsedRRule.freq).not.toBe(RRuleFrequency.YEARLY);
	});

	it('does not contain YEARLY value for frequency in rrule string when frequency is null or undefined', () => {
		const rRuleState = getDefaultRRuleState();

		[null, undefined].forEach((frequency) => {
			const repeat: RRuleState['repeat'] = {
				...rRuleState.repeat,
				frequency,
			};

			const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

			// parse the generated string
			const parsedRRule = RRule.parseString(result);

			expect(parsedRRule).not.toHaveProperty('freq');
		});
	});
});
