import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { findIndex, omit, propEq, insert, prop, indexBy, over, lensPath, mergeLeft } from 'ramda';

import { FormStateReducer, StateInitializer, FormState } from './types';
import { sortByOrder, setOrderByIndex } from '../utils';
import { DEFAULT_SECTION, DEFAULT_ELEMENT } from '../constants';
import { FormElement } from '../types';

export const initialState: FormState = {
	elements: {},
	sections: {},
	isDirty: false,
};

export const useFormStateReducer = (initializer: StateInitializer): FormStateReducer => {
	return useCallback<FormStateReducer>(
		(state, action) => {
			const { id, afterUuid, section, element, type, openElement } = action;
			let newState: FormState;

			switch (type) {
				case 'COPY_SECTION':
				case 'ADD_SECTION': {
					const UUID = uuidv4();
					// Sort the sections by order
					let sortedSections = sortByOrder(Object.values(state.sections));
					const targetId = type === 'ADD_SECTION' ? afterUuid : id;
					// Find the index of the section after which the new section should be added
					const existingSectionIdx = findIndex(propEq('UUID', targetId), sortedSections);
					// use the existing or default section
					const newFields = type === 'ADD_SECTION' ? DEFAULT_SECTION : state.sections[id];
					// Insert the new section at the correct position
					sortedSections = insert(existingSectionIdx + 1, { ...newFields, ...section, UUID }, sortedSections);
					// Recalculate the order of all the sections
					sortedSections = setOrderByIndex(sortedSections);

					// We also need to copy the elements of the section
					let sectionElements: Array<FormElement> = [];
					if (type === 'COPY_SECTION') {
						// Lets get all the elements that belong to the copied section
						sectionElements = Object.values(state.elements).filter(propEq('belongsTo', id));
						// Change the UUID and belongsTo for all the elements
						sectionElements = sectionElements.map((elem) => ({ ...elem, UUID: uuidv4(), belongsTo: UUID }));
					}
					// compute the state
					newState = {
						...state,
						sections: indexBy(prop('UUID'), sortedSections),
						elements: {
							// Since we filtered the elements by section, we need to retain other elements
							...state.elements,
							...indexBy(prop('UUID'), sectionElements),
						},
						// Open the new section
						openElement: UUID,
					};
					break;
				}

				case 'UPDATE_SECTION':
					newState = over(lensPath(['sections', id]), mergeLeft({ ...section, UUID: id }), state);
					break;

				case 'DELETE_SECTION': {
					// We also need to delete the section elements as well
					const sectionElementIds = Object.values(state.elements)
						.filter(propEq('belongsTo', id))
						.map(({ UUID }) => UUID);

					newState = {
						...state,
						sections: omit([id], state.sections),
						elements: omit(sectionElementIds, state.elements),
					};
					break;
				}

				case 'COPY_ELEMENT':
				case 'ADD_ELEMENT': {
					const UUID = uuidv4();
					// it is assumed that element will have `belongsTo` field set
					const belongsTo = type === 'ADD_ELEMENT' ? element.belongsTo : state.elements[id].belongsTo;
					// If adding a new one, use default fields, otherwise use existing
					const newFields = type === 'ADD_ELEMENT' ? DEFAULT_ELEMENT : state.elements[id];
					// we need to filter the elements by section to set the order
					const elements = Object.values(state.elements).filter(propEq('belongsTo', belongsTo));
					// Sort the elements by order
					let sortedElements = sortByOrder(elements);
					// Find the index of the element after which the new element should be added
					// When adding the new element, the index is -1, which means end of the list
					const newIndex = type === 'ADD_ELEMENT' ? -1 : findIndex(propEq('UUID', id), sortedElements) + 1;

					// Insert the new element at the correct position
					sortedElements = insert(newIndex, { ...newFields, ...element, UUID }, sortedElements);

					// Recalculate the order of all the elements
					sortedElements = setOrderByIndex(sortedElements);
					// compute the state
					newState = {
						...state,
						elements: {
							// Since we filtered the elements by section, we need to retain other elements
							...state.elements,
							...indexBy(prop('UUID'), sortedElements),
						},
						// Open the new element
						openElement: UUID,
					};
					break;
				}

				case 'UPDATE_ELEMENT':
					newState = over(lensPath(['elements', id]), mergeLeft({ ...element, UUID: id }), state);
					break;

				case 'DELETE_ELEMENT':
					newState = {
						...state,
						elements: omit([id], state.elements),
					};
					break;

				case 'TOGGLE_OPEN_ELEMENT':
					newState = {
						...state,
						openElement: openElement !== state.openElement ? openElement : '',
					};
					break;

				case 'RESET':
					return initializer(initialState);

				default:
					throw new Error('Unexpected action');
			}

			return { ...state, ...newState, isDirty: true };
		},
		[initializer]
	);
};
