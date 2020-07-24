import RRule, { Options } from 'rrule';
import { RRuleState } from '../../../state';

import computeMonthlyOn from './computeMonthlyOn';
import computeMonthlyOnThe from './computeMonthlyOnThe';

const computeMonthly = ({ mode, interval, on, onThe }: RRuleState['repeat']['monthly']): Partial<Options> => ({
	freq: RRule.MONTHLY,
	interval,
	...(mode === 'ON' ? computeMonthlyOn(on) : computeMonthlyOnThe(onThe)),
});

export default computeMonthly;
