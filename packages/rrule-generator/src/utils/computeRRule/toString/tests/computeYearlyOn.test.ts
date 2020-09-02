import { RRule } from 'rrule';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';
import { RRuleState } from '../../../../state';
import { getByMonth } from '../utils';

describe('toString.computeYearlyOn', () => {
	it('contains the default value for bymonth and bymonthday for default state', () => {
		const rRuleState = getDefaultRRuleState();

		const result = computeRRule(rRuleState, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('bymonth');
		expect(parsedRRule).toHaveProperty('bymonthday');
		expect(parsedRRule.bymonth).toBe(getByMonth(rRuleState?.repeat?.yearly?.on?.month));
		expect(parsedRRule.bymonthday).toBe(rRuleState?.repeat?.yearly?.on?.day);
	});

	it('contains the value for bymonth and bymonthday for the passed values', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState?.repeat,
			yearly: {
				...rRuleState?.repeat?.yearly,
				mode: 'ON',
				on: {
					month: 'Aug',
					day: 23,
				},
			},
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('bymonth');
		expect(parsedRRule).toHaveProperty('bymonthday');
		expect(parsedRRule.bymonth).toBe(8 /* Aug */);
		expect(parsedRRule.bymonthday).toBe(23);
	});

	it('does not contain the value for bymonthday mode is not "ON"', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState?.repeat,
			yearly: {
				...rRuleState?.repeat?.yearly,
				mode: 'ON_THE',
			},
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).not.toHaveProperty('bymonthday');
	});
});
