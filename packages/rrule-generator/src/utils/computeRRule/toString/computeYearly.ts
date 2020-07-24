import RRule, { Options } from 'rrule';

import { RRuleState } from '../../../state';

import computeYearlyOn from './computeYearlyOn';
import computeYearlyOnThe from './computeYearlyOnThe';

const computeYearly = ({ mode, on, onThe }: RRuleState['repeat']['yearly']): Partial<Options> => ({
	freq: RRule.YEARLY,
	...(mode === 'ON' ? computeYearlyOn(on) : computeYearlyOnThe(onThe)),
});

export default computeYearly;
