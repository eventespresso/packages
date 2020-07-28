import type { Reducer, ReducerState } from 'react';

import type { DatetimeBaseInput, Ticket } from '@eventespresso/edtr-services';
import type { AnyObject } from '@eventespresso/services';
import type { EntityId } from '@eventespresso/data';
import type { TpcPriceModifier } from '@eventespresso/tpc';

export interface RemTicket extends Omit<Ticket, 'prices'> {
	prices?: Array<TpcPriceModifier>;
}

export interface FormState {
	dateDetails: DatetimeBaseInput;
	exDates?: Array<string>;
	exRule: string;
	gDates?: string;
	rDates?: Array<string>;
	rRule: string;
	salesEndOffset?: string;
	salesStartOffset?: string;
	tickets: AnyObject<RemTicket>;
}

export type DataActionType =
	| 'SET_R_RULE'
	| 'SET_EX_RULE'
	| 'ADD_R_DATE'
	| 'ADD_EX_DATE'
	| 'REMOVE_R_DATE'
	| 'REMOVE_EX_DATE'
	| 'SET_DATE_DETAILS'
	| 'ADD_TICKET'
	| 'UPDATE_TICKET'
	| 'DELETE_TICKET'
	| 'RESET';

export interface DataAction extends Partial<FormState> {
	type: DataActionType;
	id?: EntityId;
	ticket?: RemTicket;
	date?: string;
}

export type FormStateManagerHook = () => FormStateManager;

export interface FormStateManager extends FormState {
	addTicket: (ticket: DataAction['ticket']) => void;
	deleteTicket: (id: string) => void;
	getData: () => FormState;
	setDateDetails: (details: FormState['dateDetails']) => void;
	setExRule: (exRule: FormState['exRule']) => void;
	setRRule: (rRule: FormState['rRule']) => void;
	addRDate: (date: string) => void;
	removeRDate: (date: string) => void;
	addExDate: (date: string) => void;
	removeExDate: (date: string) => void;
	updateDateField: <K extends keyof DatetimeBaseInput>(field: K, value: DatetimeBaseInput[K]) => void;
	updateTicket: (id: string, details: DataAction['ticket']) => void;
}

export type FormStateReducer = Reducer<FormState, DataAction>;

export type StateInitializer = (arg: FormState) => ReducerState<FormStateReducer>;
