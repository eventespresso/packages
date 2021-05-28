import { useCallback } from 'react';
import { omit, over, lensPath, mergeLeft, set, compose } from 'ramda';

import { uuid } from '@eventespresso/utils';

import { FormStateReducer, StateInitializer, FormState } from './types';
import { DEFAULT_SECTION, DEFAULT_ELEMENT } from '../constants';
import { addElementToState, addSectionToState, copySectionElements, getSectionElementIds } from './utils';

export const initialState: FormState = {
	elements: {},
	sections: {},
	isDirty: false,
};

export const useFormStateReducer = (initializer: StateInitializer): FormStateReducer => {
	return useCallback<FormStateReducer>(
		(state, action) => {
			const { UUID, afterUuid, section, element, type, openElement } = action;
			// Generate a fresh UUID for new/copied elements/sections
			const newUuid = uuid();

			// List of predicates that will be applied/composed to the state to produce the new state
			// Each case below provides that list of predicates
			let predicates: Array<(state: FormState) => FormState> = [];

			switch (type) {
				case 'ADD_SECTION': {
					// New section will be composed of default section
					const newSection = { ...DEFAULT_SECTION, ...section, UUID: newUuid };
					predicates = [addSectionToState(newSection, afterUuid)];
					break;
				}

				case 'COPY_SECTION': {
					// Copied section will be composed of the existing section
					const newSection = { ...state.sections[UUID], ...section, UUID: newUuid };
					predicates = [addSectionToState(newSection, UUID), copySectionElements(UUID, newSection.UUID)];
					break;
				}

				case 'UPDATE_SECTION':
					predicates = [over(lensPath(['sections', UUID]), mergeLeft({ ...section, UUID }))];
					break;

				case 'DELETE_SECTION': {
					// We also need to delete the section elements as well
					const sectionElementIds = getSectionElementIds(state, UUID);

					predicates = [
						over(lensPath(['sections']), omit([UUID])),
						over(lensPath(['elements']), omit(sectionElementIds)),
					];
					break;
				}

				case 'ADD_ELEMENT': {
					// New element will be composed of default element
					const newElement = { ...DEFAULT_ELEMENT, ...element, UUID: newUuid };
					predicates = [addElementToState(newElement)];
					break;
				}

				case 'COPY_ELEMENT': {
					// Copied element will be composed of the existing element
					const newElement = { ...state.elements[UUID], UUID: newUuid };
					predicates = [addElementToState(newElement, UUID)];
					break;
				}

				case 'UPDATE_ELEMENT':
					predicates = [over(lensPath(['elements', UUID]), mergeLeft({ ...element, UUID }))];
					break;

				case 'DELETE_ELEMENT':
					predicates = [over(lensPath(['elements']), omit([UUID]))];
					break;

				case 'TOGGLE_OPEN_ELEMENT':
					predicates = [set(lensPath(['openElement']), openElement !== state.openElement ? openElement : '')];
					break;

				case 'RESET':
					return initializer(initialState);

				default:
					throw new Error('Unexpected action');
			}
			// @ts-ignore - compose TS is not happy with unknown number of arguments
			const newState = compose(...predicates)(state);
			return { ...newState, isDirty: true };
		},
		[initializer]
	);
};
