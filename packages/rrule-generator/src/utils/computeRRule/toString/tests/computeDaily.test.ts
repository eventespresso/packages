import { RRule, Frequency as RRuleFrequency } from 'rrule';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';
import { RRuleState } from '../../../../state';

describe('toString.computeDaily', () => {
	it('contains the passed DAILY value for frequency in rrule string', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'DAILY',
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('freq');
		expect(parsedRRule.freq).toBe(RRuleFrequency.DAILY);
	});

	it('contains value for interval in rrule string when DAILY mode', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'DAILY',
			daily: {
				...rRuleState.repeat.daily,
				interval: 46,
			},
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('interval');
		expect(parsedRRule.interval).toBe(46);
	});

	it('does not contain value for interval in rrule string when frequency is not DAILY', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'YEARLY',
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).not.toHaveProperty('interval');
	});

	it('does not contain value for interval in rrule string when interval is null or undefined', () => {
		const rRuleState = getDefaultRRuleState();

		[null, undefined].forEach((interval) => {
			const repeat: RRuleState['repeat'] = {
				...rRuleState.repeat,
				frequency: 'DAILY',
				daily: {
					...rRuleState.repeat.daily,
					interval,
				},
			};

			const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

			// parse the generated string
			const parsedRRule = RRule.parseString(result);

			expect(parsedRRule).not.toHaveProperty('interval');
		});
	});
});
