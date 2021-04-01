import { Options } from 'rrule';
import { RRuleState } from '../../../state';
import { RRuleConfig } from '../../../types';

export type ComputeRule<T = any> = (data: RRuleState, rRuleObj: Partial<Options>, config?: RRuleConfig) => T;
