import type { Reducer, ReducerState } from 'react';

import type { DatetimeBaseInput, TicketBaseInput } from '@eventespresso/edtr-services';

export interface FormState {
	dateDetails: DatetimeBaseInput;
	exDates?: string;
	exRule: string;
	gDates?: string;
	rDates?: string;
	rRule: string;
	salesEndOffset?: string;
	salesStartOffset?: string;
	tickets: TicketBaseInput[];
}

export type DataActionType = 'SET_R_RULE' | 'SET_EX_RULE' | 'SET_DATE_DETAILS' | 'SET_TICKETS' | 'RESET';

export interface DataAction extends Partial<FormState> {
	type: DataActionType;
}

export type FormStateManagerHook = () => FormStateManager;

export interface FormStateManager extends FormState {
	getData: () => FormState;
	setDateDetails: (details: FormState['dateDetails']) => void;
	setTickets: (details: FormState['tickets']) => void;
	setExRule: (exRule: FormState['exRule']) => void;
	setRRule: (rRule: FormState['rRule']) => void;
	updateDateField: <K extends keyof DatetimeBaseInput>(field: K, value: DatetimeBaseInput[K]) => void;
}

export type FormStateReducer = Reducer<FormState, DataAction>;

export type StateInitializer = (arg: FormState) => ReducerState<FormStateReducer>;
