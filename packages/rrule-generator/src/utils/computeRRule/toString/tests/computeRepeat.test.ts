import { RRule, Frequency as RRuleFrequency } from 'rrule';
import { omit } from 'ramda';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';
import { RRuleState } from '../../../../state';
import { Frequency } from '../../../../types';
import { FREQUENCY } from '../../../../constants';

describe('toString.computeRepeat', () => {
	it('contains default value for frequency in rrule string for default state', () => {
		const rRuleState = getDefaultRRuleState();

		const result = computeRRule(rRuleState, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('freq');
		expect(parsedRRule.freq).toBe(RRule?.[rRuleState?.repeat?.frequency]);
	});

	it('contains the passed value for frequency in rrule string', () => {
		const rRuleState = getDefaultRRuleState();

		// 'MINUTELY', 'SECONDLY' are not handled by rrule-generator
		Object.keys(omit(['MINUTELY', 'SECONDLY'], FREQUENCY)).forEach((frequency: Frequency) => {
			const repeat: RRuleState['repeat'] = {
				...rRuleState.repeat,
				frequency,
			};

			const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

			// parse the generated string
			const parsedRRule = RRule.parseString(result);

			expect(parsedRRule).toHaveProperty('freq');
			expect(parsedRRule.freq).toBe(RRuleFrequency?.[frequency]);
		});
	});

	it('does not contain value for frequency in rrule string when frequency is null or undefined', () => {
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
