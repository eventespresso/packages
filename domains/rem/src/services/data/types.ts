import type { Reducer, ReducerState } from 'react';

import type { RecurrenceBaseInput } from '../apollo/mutations';
import type { DatetimeBaseInput } from '@eventespresso/edtr-services';

export interface FormState extends Omit<RecurrenceBaseInput, 'datetimes'> {
	dateDetails: DatetimeBaseInput;
}

export type DataActionType = 'SET_R_RULE' | 'SET_EX_RULE' | 'SET_DATE_DETAILS' | 'RESET';

export interface DataAction extends Partial<FormState> {
	type: DataActionType;
}

export type FormStateManagerHook = () => FormStateManager;

export interface FormStateManager extends FormState {
	getData: () => FormState;
	setDateDetails: (details: FormState['dateDetails']) => void;
	setExRule: (exRule: FormState['exRule']) => void;
	setRRule: (rRule: FormState['rRule']) => void;
	updateDateField: <K extends keyof DatetimeBaseInput>(field: K, value: DatetimeBaseInput[K]) => void;
}

export type FormStateReducer = Reducer<FormState, DataAction>;

export type StateInitializer = (arg: FormState) => ReducerState<FormStateReducer>;
