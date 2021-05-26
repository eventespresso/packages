import type { MouseEventHandler, Reducer, ReducerState } from 'react';

import type { AnyObject } from '@eventespresso/utils';

import { FormSection, FormElement } from '../types';

export interface FormState {
	sections: AnyObject<FormSection>;
	isDirty: boolean;
	openElement?: string;
}

export type ActionType =
	| 'ADD_SECTION'
	| 'UPDATE_SECTION'
	| 'DELETE_SECTION'
	| 'ADD_ELEMENT'
	| 'UPDATE_ELEMENT'
	| 'DELETE_ELEMENT'
	| 'TOGGLE_OPEN_ELEMENT'
	| 'RESET';

export interface DataAction extends Partial<FormState> {
	element?: Partial<FormElement>;
	id?: string;
	section?: Partial<FormSection>;
	sectionId?: string;
	type: ActionType;
}

export type FormStateManagerHook = (initialSections?: Array<FormSection>) => FormStateManager;

export interface FormStateManager extends FormState {
	addElement: (sectionId: string, element: FormElement) => void;
	addSection: (section: FormSection) => void;
	deleteElement: (sectionId: string, uuid: string) => void;
	deleteSection: (uuid: string) => void;
	getData: () => FormState;
	getSections: () => Array<FormSection>;
	isElementOpen: (uuid: string) => boolean;
	reset: () => void;
	toggleOpenElement: (uuid: string) => MouseEventHandler<HTMLButtonElement>;
	updateElement: (sectionId: string, uuid: string, element: DataAction['element']) => void;
	updateSection: (uuid: string, section: DataAction['section']) => void;
}

export type FormStateReducer = Reducer<FormState, DataAction>;

export type StateInitializer = (arg: FormState) => ReducerState<FormStateReducer>;
