import { RRule, Frequency as RRuleFrequency, Weekday } from 'rrule';

import computeRRule from '../computeRRule';
import { getDefaultRRuleState } from '../../../misc';
import { DEFAULT_CONFIG } from '../../../../context';
import { RRuleState } from '../../../../state';
import { weekdayStringToNumber } from '../utils';

describe('toString.computeWeekly', () => {
	it('contains the passed WEEKLY value for frequency in rrule string', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'WEEKLY',
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('freq');
		expect(parsedRRule.freq).toBe(RRuleFrequency.WEEKLY);
	});

	it('contains value for interval in rrule string when WEEKLY mode', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'WEEKLY',
			weekly: {
				...rRuleState.repeat.weekly,
				interval: 46,
			},
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		expect(parsedRRule).toHaveProperty('interval');
		expect(parsedRRule.interval).toBe(46);
	});

	it('does not contain value for interval in rrule string when frequency is not WEEKLY', () => {
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
				frequency: 'WEEKLY',
				weekly: {
					...rRuleState.repeat.weekly,
					interval,
				},
			};

			const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

			// parse the generated string
			const parsedRRule = RRule.parseString(result);

			expect(parsedRRule).not.toHaveProperty('interval');
		});
	});

	it('contains passed value for byweekday in rrule string', () => {
		const rRuleState = getDefaultRRuleState();

		const repeat: RRuleState['repeat'] = {
			...rRuleState.repeat,
			frequency: 'WEEKLY',
			weekly: {
				...rRuleState.repeat.weekly,
				days: {
					...rRuleState.repeat.weekly.days,
					WE: true,
					FR: true,
				},
			},
		};

		const result = computeRRule({ ...rRuleState, repeat }, DEFAULT_CONFIG);

		// parse the generated string
		const parsedRRule = RRule.parseString(result);

		// convert weekday object to numbers
		const weekdayNumbers = (parsedRRule.byweekday as Weekday[]).map((weekday) => weekday.weekday);

		expect(parsedRRule).toHaveProperty('byweekday');
		expect(weekdayNumbers).toContain(weekdayStringToNumber('WE'));
		expect(weekdayNumbers).toContain(weekdayStringToNumber('FR'));
		expect(weekdayNumbers).not.toContain(weekdayStringToNumber('MO'));
		expect(weekdayNumbers).not.toContain(weekdayStringToNumber('TU'));
		expect(weekdayNumbers).not.toContain(weekdayStringToNumber('TH'));
		expect(weekdayNumbers).not.toContain(weekdayStringToNumber('SA'));
	});
});
