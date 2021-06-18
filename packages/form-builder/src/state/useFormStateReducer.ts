import { useCallback } from 'react';
import * as R from 'ramda';

import { uuid, isEqualJson } from '@eventespresso/utils';

import { FormStateReducer, StateInitializer, FormState } from './types';
import { DEFAULT_SECTION, DEFAULT_ELEMENT } from '../constants';
import {
	addElementToState,
	addSectionToState,
	copySectionElements,
	getSectionElementIds,
	moveElement,
	moveSection,
	omitLocalFields,
} from './utils';
import { FormElement, FormSection } from '../types';

export const initialState: FormState = {
	elements: {},
	sections: {},
	deletedElements: [],
	deletedSections: [],
	isDirty: false,
	openElement: '',
};

export const useFormStateReducer = (initializer: StateInitializer): FormStateReducer => {
	return useCallback<FormStateReducer>(
		(state, action) => {
			const { id, afterId, section, element, type, index, sectionId, openElement } = action;
			// Generate a fresh id for new/copied elements/sections
			const newId = uuid();

			// List of predicates that will be applied/composed to the state to produce the new state
			// Each case below provides that list of predicates
			let predicates: Array<(state: FormState) => FormState> = [];

			switch (type) {
				case 'ADD_SECTION': {
					// New section will be composed of default section
					const newSection: FormSection = { ...DEFAULT_SECTION, ...section, id: newId, isNew: true };
					predicates = [addSectionToState(newSection, afterId)];
					break;
				}

				case 'COPY_SECTION': {
					// Copied section will be composed of the existing section
					const newSection: FormSection = { ...state.sections[id], ...section, id: newId, isNew: true };
					predicates = [addSectionToState(newSection, id), copySectionElements(id, newSection.id)];
					break;
				}

				case 'MOVE_SECTION': {
					predicates = [moveSection(id, index)];
					break;
				}

				case 'UPDATE_SECTION': {
					// Update and mark the section as modified
					const newSection: Partial<FormSection> = { ...section, id, isModified: true };
					predicates = [R.over(R.lensPath(['sections', id]), R.mergeLeft(newSection))];
					break;
				}

				case 'DELETE_SECTION': {
					// We also need to delete the section elements as well
					const sectionElementIds = getSectionElementIds(state, id);

					predicates = [
						R.over(R.lensPath(['sections']), R.omit([id])),
						R.over(R.lensPath(['elements']), R.omit(sectionElementIds)),
						// unless a section is new, it needs to be marked as deleted
						R.unless(
							R.pathEq(['sections', id, 'isNew'], true),
							R.over(R.lensPath(['deletedSections']), R.concat([id]))
						),
					];
					break;
				}

				case 'MARK_SECTION_AS_SAVED': {
					predicates = [
						R.over(R.lensPath(['sections', id]), (existingSection) => {
							/**
							 * Here we need to properly handle the case for modifications
							 * while the section was being saved.
							 *
							 * if the user made changes after the save request was fired, then we again need to
							 * mark the section as modified.
							 * We can do so by matching the passed section with the one in current state
							 * If the their JSON is different, it means it was modified after the save request was fired
							 *
							 * It is expected that a complete section is passed back when marking a section as saved
							 */
							const isModified = !isEqualJson(section, existingSection);
							// get rid of `isModified` and `isNew` flags
							const newSection = omitLocalFields(existingSection);
							return { ...newSection, isModified };
						}),
					];
					break;
				}

				case 'MARK_SECTION_AS_DELETED': {
					predicates = [R.over(R.lensPath(['deletedSections']), R.without([id]))];
					break;
				}

				case 'ADD_ELEMENT': {
					// New element will be composed of default element
					const newElement: FormElement = { ...DEFAULT_ELEMENT, ...element, id: newId, isNew: true };
					predicates = [addElementToState(newElement)];
					break;
				}

				case 'COPY_ELEMENT': {
					// Copied element will be composed of the existing element
					const newElement: FormElement = { ...state.elements[id], id: newId, isNew: true };
					predicates = [addElementToState(newElement, id)];
					break;
				}

				case 'MOVE_ELEMENT': {
					predicates = [moveElement(id, index, sectionId)];
					break;
				}

				case 'UPDATE_ELEMENT': {
					// Update and mark the element as modified
					const newElement: Partial<FormElement> = { ...element, id, isModified: true };
					predicates = [R.over(R.lensPath(['elements', id]), R.mergeLeft(newElement))];
					break;
				}

				case 'DELETE_ELEMENT':
					predicates = [
						R.over(R.lensPath(['elements']), R.omit([id])),
						// unless an element is new, it needs to be marked as deleted
						R.unless(
							R.pathEq(['elements', id, 'isNew'], true),
							R.over(R.lensPath(['deletedElements']), R.concat([id]))
						),
					];
					break;

				case 'MARK_ELEMENT_AS_SAVED': {
					predicates = [
						R.over(R.lensPath(['elements', id]), (existingElement) => {
							/**
							 * See 'MARK_SECTION_AS_SAVED' case above
							 */
							const isModified = !isEqualJson(element, existingElement);
							// get rid of `isModified` and `isNew` flags
							const newElement = omitLocalFields(existingElement);
							return { ...newElement, isModified };
						}),
					];
					break;
				}

				case 'MARK_ELEMENT_AS_DELETED': {
					predicates = [R.over(R.lensPath(['deletedElements']), R.without([id]))];
					break;
				}

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
			const newState = R.compose(...predicates)(state);

			return { ...newState, isDirty: true };
		},
		[initializer]
	);
};
