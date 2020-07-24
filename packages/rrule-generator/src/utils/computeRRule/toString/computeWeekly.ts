import RRule, { Options } from 'rrule';

import { RRuleState } from '../../../state';

const computeWeekly = ({ interval, days }: RRuleState['repeat']['weekly']): Partial<Options> => ({
	freq: RRule.WEEKLY,
	interval,
	byweekday: Object.values(days).reduce(
		(activeDays, isDayActive, dayIndex) => (isDayActive ? [...activeDays, dayIndex] : activeDays),
		[]
	),
});

export default computeWeekly;
