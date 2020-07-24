import { Reducer, ReducerState } from 'react';
import {
	Day,
	EndMode,
	EndRule,
	Frequency,
	Month,
	RepeatMode,
	RepeatRule,
	StartRule,
	WeeklyRepeatOption,
	Which,
	YearlyRepeatOption,
} from '../types';

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
	| 'SET_END_DATE'
	| 'SET_REPEAT_FREQUENCY'
	| 'SET_REPEAT_INTERVAL'
	| 'SET_REPEAT_MONTH'
	| 'SET_REPEAT_DAY'
	| 'SET_REPEAT_WHICH'
	| 'SET_REPEAT_WEEKLY_DAYS'
	| 'SET_REPEAT_MODE';

export interface RRuleAction extends Partial<RRuleState> {
	after?: number;
	data?: RRuleState;
	date?: Date;
	day?: Day;
	days?: WeeklyRepeatOption['days'];
	endMode?: EndMode;
	frequency?: Frequency;
	interval?: number;
	mode?: RepeatMode;
	month?: Month;
	monthYearMode?: keyof Omit<YearlyRepeatOption, 'mode'>;
	repeatKey?: keyof Omit<RepeatRule, 'frequency'>;
	type: RRuleActionType;
	which?: Which;
}

export interface RRuleStateManager extends Readonly<RRuleState> {
	getData: () => RRuleState;
	setData: (data: RRuleState) => void;
	setStartDate: (date: Date) => void;
	setEndMode: (endMode: EndMode) => void;
	setEndAfter: (after: number) => void;
	setEndDate: (date: Date) => void;
	setRepeatFrequency: (repeatKey: Frequency) => void;
	setRepeatInterval: (repeatKey: keyof Omit<RepeatRule, 'frequency' | 'yearly'>, interval: number) => void;
	setRepeatMonth: (monthYearMode: RRuleAction['monthYearMode'], month: Month) => void;
	setRepeatWhich: (
		repeatKey: keyof Pick<RepeatRule, 'yearly' | 'monthly'>,
		monthYearMode: RRuleAction['monthYearMode'],
		which: Which
	) => void;
	setRepeatWeeklyDays: (days: WeeklyRepeatOption['days']) => void;
	setRepeatDay: (
		repeatKey: keyof Pick<RepeatRule, 'yearly' | 'monthly'>,
		monthYearMode: RRuleAction['monthYearMode'],
		day: Day
	) => void;
	setRepeatMode: (repeatKey: RRuleAction['repeatKey'], mode: RepeatMode) => void;
}

export type RRuleStateReducer = Reducer<RRuleState, RRuleAction>;

export type StateInitializer = (arg: RRuleState) => ReducerState<RRuleStateReducer>;
