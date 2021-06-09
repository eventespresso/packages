import { useCallback } from 'react';
import * as R from 'ramda';

import { uuid } from '@eventespresso/utils';

import { FormStateReducer, StateInitializer, FormState } from './types';
import { DEFAULT_SECTION, DEFAULT_ELEMENT } from '../constants';
import {
	addElementToState,
	addSectionToState,
	copySectionElements,
	getSectionElementIds,
	moveElement,
	moveSection,
} from './utils';

export const initialState: FormState = {
	elements: {},
	sections: {},
	deletedElements: [],
	deletedSections: [],
	isDirty: false,
};

export const useFormStateReducer = (initializer: StateInitializer): FormStateReducer => {
	return useCallback<FormStateReducer>(
		(state, action) => {
			const { UUID, afterUuid, section, element, type, index, sectionId, openElement } = action;
			// Generate a fresh UUID for new/copied elements/sections
			const newUuid = uuid();

			// List of predicates that will be applied/composed to the state to produce the new state
			// Each case below provides that list of predicates
			let predicates: Array<(state: FormState) => FormState> = [];

			switch (type) {
				case 'ADD_SECTION': {
					// New section will be composed of default section
					const newSection = { ...DEFAULT_SECTION, ...section, UUID: newUuid, isNew: true };
					predicates = [addSectionToState(newSection, afterUuid)];
					break;
				}

				case 'COPY_SECTION': {
					// Copied section will be composed of the existing section
					const newSection = { ...state.sections[UUID], ...section, UUID: newUuid, isNew: true };
					predicates = [addSectionToState(newSection, UUID), copySectionElements(UUID, newSection.UUID)];
					break;
				}

				case 'MOVE_SECTION': {
					predicates = [moveSection(UUID, index)];
					break;
				}

				case 'UPDATE_SECTION': {
					// Update and mark the section as modified
					const newSection = { ...section, UUID, isModified: true };
					predicates = [R.over(R.lensPath(['sections', UUID]), R.mergeLeft(newSection))];
					break;
				}

				case 'DELETE_SECTION': {
					// We also need to delete the section elements as well
					const sectionElementIds = getSectionElementIds(state, UUID);

					predicates = [
						R.over(R.lensPath(['sections']), R.omit([UUID])),
						R.over(R.lensPath(['elements']), R.omit(sectionElementIds)),
						// unless a section is new, it needs to be marked as deleted
						R.unless(
							R.pathEq(['sections', UUID, 'isNew'], true),
							R.over(R.lensPath(['deletedSections']), R.concat([UUID]))
						),
					];
					break;
				}

				case 'ADD_ELEMENT': {
					// New element will be composed of default element
					const newElement = { ...DEFAULT_ELEMENT, ...element, UUID: newUuid, isNew: true };
					predicates = [addElementToState(newElement)];
					break;
				}

				case 'COPY_ELEMENT': {
					// Copied element will be composed of the existing element
					const newElement = { ...state.elements[UUID], UUID: newUuid, isNew: true };
					predicates = [addElementToState(newElement, UUID)];
					break;
				}

				case 'MOVE_ELEMENT': {
					predicates = [moveElement(UUID, index, sectionId)];
					break;
				}

				case 'UPDATE_ELEMENT': {
					// Update and mark the element as modified
					const newElement = { ...element, UUID, isModified: true };
					predicates = [R.over(R.lensPath(['elements', UUID]), R.mergeLeft(newElement))];
					break;
				}

				case 'DELETE_ELEMENT':
					predicates = [
						R.over(R.lensPath(['elements']), R.omit([UUID])),
						// unless an element is new, it needs to be marked as deleted
						R.unless(
							R.pathEq(['elements', UUID, 'isNew'], true),
							R.over(R.lensPath(['deletedElements']), R.concat([UUID]))
						),
					];
					break;

				case 'TOGGLE_OPEN_ELEMENT':
					predicates = [
						R.set(R.lensPath(['openElement']), openElement !== state.openElement ? openElement : ''),
					];
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
