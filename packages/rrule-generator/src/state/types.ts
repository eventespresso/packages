import { Reducer, ReducerState } from 'react';
import { StartRule, RepeatRule, EndRule } from '../types';

export interface RRuleState {
	start: StartRule;
	repeat: RepeatRule;
	end: EndRule;
	error?: Error;
}

export type RRuleActionType = 'SET_DATA' | 'RESET' | 'SET_START_DATE';

export interface RRuleAction extends Partial<RRuleState> {
	type: RRuleActionType;
	data?: RRuleState;
	date?: Date;
}

export interface RRuleStateManager extends RRuleState {
	getData: () => RRuleState;
	setData: (data: RRuleState) => void;
	setStartDate: (date: Date) => void;
}

export type RRuleStateReducer = Reducer<RRuleState, RRuleAction>;

export type StateInitializer = (arg: RRuleState) => ReducerState<RRuleStateReducer>;
