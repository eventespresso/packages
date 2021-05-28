import { findIndex, propEq, insert, prop, indexBy } from 'ramda';
import { v4 as uuidv4 } from 'uuid';

import { FormState } from './types';
import { sortByOrder, setOrderByIndex } from '../utils';
import { FormElement, FormSection } from '../types';

export const addSectionToState = (section: FormSection, afterUuid: string) => (state: FormState): FormState => {
	// Sort the sections by order
	let sortedSections = sortByOrder(Object.values(state.sections));
	// Find the index of the section after which the new section should be added
	const existingSectionIdx = findIndex(propEq('UUID', afterUuid), sortedSections);
	// Insert the new section at the correct position
	sortedSections = insert(existingSectionIdx + 1, section, sortedSections);
	// Recalculate the order of all the sections
	sortedSections = setOrderByIndex(sortedSections);

	// compute the state
	return {
		...state,
		sections: indexBy(prop('UUID'), sortedSections),
		// Open the new section
		openElement: section.UUID,
	};
};

export const addElementToState = (element: FormElement, afterUuid?: string) => (state: FormState): FormState => {
	// we need to filter the elements by section to set the order
	const elements = Object.values(state.elements).filter(propEq('belongsTo', element.belongsTo));
	// Sort the elements by order
	let sortedElements = sortByOrder(elements);
	// Find the index of the element after which the new element should be added
	const existingElementIdx = afterUuid ? findIndex(propEq('UUID', afterUuid), sortedElements) : -1;

	// If the element is not found, new index is -1 (end of the list)
	const newIndex = existingElementIdx < 0 ? -1 : existingElementIdx + 1;

	// Insert the new element at the correct position
	sortedElements = insert(newIndex, element, sortedElements);

	// Recalculate the order of all the elements
	sortedElements = setOrderByIndex(sortedElements);
	// compute the state
	return {
		...state,
		elements: {
			// Since we filtered the elements by section, we need to retain other elements
			...state.elements,
			...indexBy(prop('UUID'), sortedElements),
		},
		// Open the new element
		openElement: element.UUID,
	};
};

export const copySectionElements = (copyFromSectionId: string, newSectionId: string) => (
	state: FormState
): FormState => {
	// We also need to copy the elements of the section
	let sectionElements: Array<FormElement> = [];
	// Lets get all the elements that belong to the copied section
	sectionElements = Object.values(state.elements).filter(propEq('belongsTo', copyFromSectionId));
	// Change the UUID and belongsTo for all the elements
	sectionElements = sectionElements.map((elem) => ({ ...elem, UUID: uuidv4(), belongsTo: newSectionId }));

	return {
		...state,
		elements: {
			// Since we filtered the elements by section, we need to retain other elements
			...state.elements,
			...indexBy(prop('UUID'), sectionElements),
		},
	};
};

export const getSectionElementIds = (state: FormState, sectionId: string): Array<string> => {
	return Object.values(state.elements)
		.filter(propEq('belongsTo', sectionId))
		.map(({ UUID }) => UUID);
};
