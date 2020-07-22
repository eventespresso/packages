import type { Reducer, ReducerState } from 'react';

import type { DatetimeBaseInput, Ticket } from '@eventespresso/edtr-services';
import { AnyObject } from '@eventespresso/services';
import { EntityId } from '@eventespresso/data';

export interface FormState {
	dateDetails: DatetimeBaseInput;
	exDates?: string;
	exRule: string;
	gDates?: string;
	rDates?: string;
	rRule: string;
	salesEndOffset?: string;
	salesStartOffset?: string;
	tickets: AnyObject<Ticket>;
}

export type DataActionType =
	| 'SET_R_RULE'
	| 'SET_EX_RULE'
	| 'SET_DATE_DETAILS'
	| 'ADD_TICKET'
	| 'UPDATE_TICKET'
	| 'DELETE_TICKET'
	| 'RESET';

export interface DataAction extends Partial<FormState> {
	type: DataActionType;
	id?: EntityId;
	ticket?: Ticket;
}

export type FormStateManagerHook = () => FormStateManager;

export interface FormStateManager extends FormState {
	addTicket: (ticket: DataAction['ticket']) => void;
	deleteTicket: (id: string) => void;
	getData: () => FormState;
	setDateDetails: (details: FormState['dateDetails']) => void;
	setExRule: (exRule: FormState['exRule']) => void;
	setRRule: (rRule: FormState['rRule']) => void;
	updateDateField: <K extends keyof DatetimeBaseInput>(field: K, value: DatetimeBaseInput[K]) => void;
	updateTicket: (id: string, details: DataAction['ticket']) => void;
}

export type FormStateReducer = Reducer<FormState, DataAction>;

export type StateInitializer = (arg: FormState) => ReducerState<FormStateReducer>;
