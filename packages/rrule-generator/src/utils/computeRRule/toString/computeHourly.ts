import RRule, { Options } from 'rrule';
import { RRuleState } from '../../../state';

const computeHourly = ({ interval }: RRuleState['repeat']['hourly']): Partial<Options> => ({
	freq: RRule.HOURLY,
	interval,
});

export default computeHourly;
