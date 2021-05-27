import type { Reducer, ReducerState } from 'react';

import type { AnyObject } from '@eventespresso/utils';

import type { FormSection, FormElement } from '../types';
import type { FormStateProviderProps } from '../context';

export interface FormState {
	sections: AnyObject<FormSection>;
	elements: AnyObject<FormElement>;
	isDirty: boolean;
	openElement?: string;
}

export type ActionType =
	| 'ADD_SECTION'
	| 'UPDATE_SECTION'
	| 'DELETE_SECTION'
	| 'COPY_SECTION'
	| 'ADD_ELEMENT'
	| 'UPDATE_ELEMENT'
	| 'DELETE_ELEMENT'
	| 'COPY_ELEMENT'
	| 'TOGGLE_OPEN_ELEMENT'
	| 'RESET';

export interface DataAction extends Partial<FormState> {
	afterUuid?: string;
	element?: Partial<FormElement>;
	id?: string;
	section?: Partial<FormSection>;
	type: ActionType;
}

export type FormStateManagerHook = (props?: FormStateProviderProps) => FormStateManager;

export interface FormStateManager extends FormState {
	addElement: (element: Partial<FormElement>) => void;
	addSection: (section: Partial<FormSection>, afterUuid?: string) => void;
	copyElement: (uuid: string) => void;
	copySection: (uuid: string) => void;
	deleteElement: (uuid: string) => void;
	deleteSection: (uuid: string) => void;
	getData: () => FormState;
	getElements: (sectionId?: string) => Array<FormElement>;
	getSections: () => Array<FormSection>;
	isElementOpen: (uuid: string) => boolean;
	reset: () => void;
	toggleOpenElement: (uuid: string) => void;
	updateElement: (uuid: string, element: DataAction['element']) => void;
	updateSection: (uuid: string, section: DataAction['section']) => void;
}

export type FormStateReducer = Reducer<FormState, DataAction>;

export type StateInitializer = (arg: FormState) => ReducerState<FormStateReducer>;
