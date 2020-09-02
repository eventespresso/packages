import { RRule, Frequency as RRuleFrequency } from 'rrule';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';
import { RRuleState } from '../../../../state';

describe('toString.computeHourly', () => {
	it('contains the passed HOURLY value for frequency in rrule string', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'HOURLY',
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('freq');
		expect(parsedRRule.freq).toBe(RRuleFrequency.HOURLY);
	});

	it('contains value for interval in rrule string when HOURLY mode', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'HOURLY',
			hourly: {
				...rRuleState.repeat.hourly,
				interval: 46,
			},
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('interval');
		expect(parsedRRule.interval).toBe(46);
	});

	it('does not contain value for interval in rrule string when frequency is not HOURLY', () => {
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
				frequency: 'HOURLY',
				hourly: {
					...rRuleState.repeat.hourly,
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
