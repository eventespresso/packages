import { Options } from 'rrule';
import { RRuleState } from '../../../state';

export type ComputeRule<T = any> = (data: RRuleState, rRuleObj: Partial<Options>) => T;
