import RRule from 'rrule';

import computeStart from './computeStart';
import computeRepeat from './computeRepeat';
import computeEnd from './computeEnd';
import computeOptions from './computeOptions';
import { RRuleState } from '../../../state';
import { RRuleConfig } from '../../../types';

type ComputeRRule = (state: RRuleState, config: RRuleConfig, hideStart?: boolean) => string;

const computeRRule: ComputeRRule = ({ start, repeat, end }, { weekStartsOn }, hideStart) => {
	const rruleObject = {
		...computeStart(start),
		...computeRepeat(repeat),
		...computeEnd(end),
		...computeOptions({ weekStartsOn, hideStart }),
	};
	const rrule = new RRule(rruleObject);
	return rrule.toString();
};

export default computeRRule;
