import { RRule, Weekday, WeekdayStr } from 'rrule';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';
import { ALL_WEEKDAYS } from '../../../../constants';

describe('toString.computeOptions', () => {
	it('contains value for "dtstart" and default "wkst" in rrule string for default config', () => {
		const rRuleState = getDefaultRRuleState();

		const result = computeRRule(rRuleState, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('dtstart');
		expect(parsedRRule).toHaveProperty('wkst');
		expect(parsedRRule.dtstart).toBeInstanceOf(Date);
		expect((parsedRRule.wkst as Weekday).weekday).toBe(Weekday.fromStr(DEFAULT_CONFIG.weekStartsOn).weekday);
	});

	it('does not contain value for "dtstart" when hideStart is passed', () => {
		const rRuleState = getDefaultRRuleState();

		const hideStart = true;

		const result = computeRRule(rRuleState, DEFAULT_CONFIG, hideStart);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).not.toHaveProperty('dtstart');
	});

	it('does not contain value for "wkst" when "weekStartsOn" is empty or nill', () => {
		const rRuleState = getDefaultRRuleState();

		['', null, undefined].forEach((weekStartsOn: WeekdayStr) => {
			const result = computeRRule(rRuleState, { ...DEFAULT_CONFIG, weekStartsOn });

			// parse the generated string
			const parsedRRule = RRule.parseString(result);

			expect(parsedRRule).not.toHaveProperty('wkst');
		});
	});

	it('contains the passed value for "wkst" in rrule string', () => {
		const rRuleState = getDefaultRRuleState();

		ALL_WEEKDAYS.forEach((weekStartsOn) => {
			const result = computeRRule(rRuleState, { ...DEFAULT_CONFIG, weekStartsOn });

			// parse the generated string
			const parsedRRule = RRule.parseString(result);

			expect(parsedRRule).toHaveProperty('wkst');
			expect(parsedRRule.wkst).toBeInstanceOf(Weekday);
			expect(parsedRRule.wkst.toString()).toBe(weekStartsOn);
		});
	});
});
