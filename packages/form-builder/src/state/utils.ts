import { findIndex, indexBy, insert, lensProp, move, prop, propEq, set, splitAt } from 'ramda';

import { uuid } from '@eventespresso/utils';

import { FormState } from './types';
import { sortByOrder, setOrderByIndex } from '../utils';
import { FormElement, FormSection } from '../types';

export function markAsModified<Item extends { isModified?: boolean }>(items: Array<Item>, startingIndex: number) {
	// split the items at the starting index to mark the succeeding indices as modified items
	const [unmodifiedElements, modifiedElements] = splitAt(startingIndex, items);
	// set `isModified` to true
	const newModifiedElements = modifiedElements.map(set(lensProp('isModified'), true));
	// Update the elements array
	return [...unmodifiedElements, ...newModifiedElements];
}

export const addSectionToState = (section: FormSection, afterUuid: string) => (state: FormState): FormState => {
	// Sort the sections by order
	let sortedSections = sortByOrder(Object.values(state.sections));
	// Find the index of the section after which the new section should be added
	const existingSectionIdx = findIndex(propEq('UUID', afterUuid), sortedSections);
	const newIndex = existingSectionIdx + 1;
	// Insert the new section at the correct position
	sortedSections = insert(newIndex, section, sortedSections);
	// Recalculate the order of all the sections
	sortedSections = setOrderByIndex(sortedSections);
	// mark the updated items as modified, here the `order` will change only from the new index
	sortedSections = markAsModified(sortedSections, newIndex);

	// compute the state
	return {
		...state,
		sections: indexBy(prop('UUID'), sortedSections),
		// Open the new section
		openElement: section.UUID,
	};
};

export const moveSection = (UUID: string, newIndex: number) => (state: FormState): FormState => {
	// Sort the sections by order
	let sortedSections = sortByOrder(Object.values(state.sections));
	// Find the current index of the section
	const currentIndex = findIndex(propEq('UUID', UUID), sortedSections);
	// If the element is not found
	if (currentIndex < 0) {
		return state;
	}
	// Move the element to the new index
	sortedSections = move(currentIndex, newIndex, sortedSections);
	// Recalculate the order of all the sections
	sortedSections = setOrderByIndex(sortedSections);
	// items can be re-arranged in any order (up and down), so the `order` will change starting from the lower index
	// so we need to use the lowest of the two indices to mark them as modified
	const modifiedStartIndex = Math.min(currentIndex, newIndex);
	// mark the updated items as modified
	sortedSections = markAsModified(sortedSections, modifiedStartIndex);

	// compute the state
	return {
		...state,
		sections: indexBy(prop('UUID'), sortedSections),
		// close any open elements
		openElement: '',
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
	// mark the updated items as modified, here the `order` will change only from the new index
	sortedElements = markAsModified(sortedElements, newIndex);

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

export const moveElement = (UUID: string, newIndex: number, sectionId: string) => (state: FormState): FormState => {
	// Change/Set the section Id for the element
	const elementsMap = {
		...state.elements,
		[UUID]: {
			...state.elements[UUID],
			belongsTo: sectionId,
		},
	};
	// we need to filter the elements by section to set the order
	const elements = Object.values(elementsMap).filter(propEq('belongsTo', sectionId));
	// Sort the elements by order
	let sortedElements = sortByOrder(elements);
	// Find the current index of the section
	const currentIndex = findIndex(propEq('UUID', UUID), sortedElements);
	// If the element is not found
	if (currentIndex < 0) {
		return state;
	}
	// Move the element to the new index
	sortedElements = move(currentIndex, newIndex, sortedElements);

	// Recalculate the order of all the elements
	sortedElements = setOrderByIndex(sortedElements);
	// items can be re-arranged in any order (up and down), so the `order` will change starting from the lower index
	// so we need to use the lowest of the two indices to mark them as modified
	const modifiedStartIndex = Math.min(currentIndex, newIndex);
	// mark the updated items as modified
	sortedElements = markAsModified(sortedElements, modifiedStartIndex);

	// compute the state
	return {
		...state,
		elements: {
			// Since we filtered the elements by section, we need to retain other elements
			...state.elements,
			...indexBy(prop('UUID'), sortedElements),
		},
		// close any open elements
		openElement: '',
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
	sectionElements = sectionElements.map((elem) => ({ ...elem, UUID: uuid(), belongsTo: newSectionId, isNew: true }));

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
