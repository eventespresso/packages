import { Reducer, ReducerState } from 'react';
import { StartRule, RepeatRule, EndRule, EndMode } from '../types';

export interface RRuleState {
	start: StartRule;
	repeat: RepeatRule;
	end: EndRule;
	error?: Error;
}

export type RRuleActionType =
	| 'SET_DATA'
	| 'RESET'
	| 'SET_START_DATE'
	| 'SET_END_MODE'
	| 'SET_END_AFTER'
	| 'SET_END_DATE';

export interface RRuleAction extends Partial<RRuleState> {
	type: RRuleActionType;
	data?: RRuleState;
	date?: Date;
	endMode?: EndMode;
	after?: number;
}

export interface RRuleStateManager extends RRuleState {
	getData: () => RRuleState;
	setData: (data: RRuleState) => void;
	setStartDate: (date: Date) => void;
	setEndMode: (endMode: EndMode) => void;
	setEndAfter: (after: number) => void;
	setEndDate: (date: Date) => void;
}

export type RRuleStateReducer = Reducer<RRuleState, RRuleAction>;

export type StateInitializer = (arg: RRuleState) => ReducerState<RRuleStateReducer>;
