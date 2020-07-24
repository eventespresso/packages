import RRule, { Options } from 'rrule';
import { RRuleState } from '../../../state';

const computeDaily = ({ interval }: RRuleState['repeat']['daily']): Partial<Options> => ({
	freq: RRule.DAILY,
	interval,
});

export default computeDaily;
