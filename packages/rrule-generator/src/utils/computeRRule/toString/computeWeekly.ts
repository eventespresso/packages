import RRule, { Options } from 'rrule';

import { RRuleState } from '../../../state';

const computeWeekly = ({ interval, days }: RRuleState['repeat']['weekly']): Partial<Options> => ({
	freq: RRule.WEEKLY,
	interval,
	byweekday: Object.entries(days).reduce((activeDays, [day, isDayActive]) => {
		// `day` will be 'MO', 'TU' ...
		return isDayActive ? [...activeDays, day] : activeDays;
	}, []),
});

export default computeWeekly;
