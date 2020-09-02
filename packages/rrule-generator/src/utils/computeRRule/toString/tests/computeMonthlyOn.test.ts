import { RRule } from 'rrule';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';
import { RRuleState } from '../../../../state';

describe('toString.computeMonthlyOn', () => {
	it('contains the value for bymonth and bymonthday for the passed values', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState?.repeat,
			frequency: 'MONTHLY',
			monthly: {
				...rRuleState?.repeat?.monthly,
				mode: 'ON',
				on: {
					day: 23,
				},
			},
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('bymonthday');
		expect(parsedRRule.bymonthday).toBe(23);
	});

	it('does not contain the value for bymonthday mode is not "ON"', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState?.repeat,
			frequency: 'MONTHLY',
			monthly: {
				...rRuleState?.repeat?.monthly,
				mode: 'ON_THE',
			},
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).not.toHaveProperty('bymonthday');
	});

	it('does not contain the value for bymonthday mode is null or undefined', () => {
		const rRuleState = getDefaultRRuleState();

		[null, undefined].forEach((mode) => {
			const repeat: RRuleState['repeat'] = {
				...rRuleState?.repeat,
				frequency: 'MONTHLY',
				monthly: {
					...rRuleState?.repeat?.monthly,
					mode,
				},
			};

			const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

			// parse the generated string
			const parsedRRule = RRule.parseString(result);

			expect(parsedRRule).not.toHaveProperty('bymonthday');
		});
	});
});
