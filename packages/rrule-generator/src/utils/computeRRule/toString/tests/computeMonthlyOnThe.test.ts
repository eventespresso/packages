import { RRule, Weekday } from 'rrule';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';
import { RRuleState } from '../../../../state';
import { getBySetPos } from '../utils';

describe('toString.computeMonthlyOnThe', () => {
	it('does not contain the default value for bysetpos and byweekday for default state', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState?.repeat,
			frequency: 'MONTHLY',
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).not.toHaveProperty('bysetpos');
		expect(parsedRRule).not.toHaveProperty('byweekday');
	});

	it('contains the value for bymonth, bysetpos and byweekday when mode is "ON_THE"', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState?.repeat,
			frequency: 'MONTHLY',
			monthly: {
				...rRuleState?.repeat?.monthly,
				mode: 'ON_THE',
				onThe: {
					day: 'FR',
					which: 'SECOND',
				},
			},
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('bysetpos');
		expect(parsedRRule).toHaveProperty('byweekday');
		expect(parsedRRule.bysetpos).toBe(getBySetPos('SECOND'));
		expect(parsedRRule.byweekday[0]).toEqual(Weekday.fromStr('FR'));
	});

	it('does not contain the value for bysetpos and byweekday mode is not "ON_THE"', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState?.repeat,
			frequency: 'MONTHLY',
			monthly: {
				...rRuleState?.repeat?.monthly,
				mode: 'ON',
			},
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).not.toHaveProperty('bysetpos');
		expect(parsedRRule).not.toHaveProperty('byweekday');
	});
});
