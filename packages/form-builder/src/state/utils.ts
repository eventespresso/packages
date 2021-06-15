import * as R from 'ramda';

import { uuid } from '@eventespresso/utils';

import { FormState } from './types';
import { sortByOrder, setOrderByIndex } from '../utils';
import { FormElement, FormSection } from '../types';

export function markAsModified<Item extends { isModified?: boolean }>(items: Array<Item>, startingIndex: number) {
	// split the items at the starting index to mark the succeeding indices as modified items
	const [unmodifiedElements, modifiedElements] = R.splitAt(startingIndex, items);
	// set `isModified` to true
	const newModifiedElements = modifiedElements.map(R.set(R.lensProp('isModified'), true));
	// Update the elements array
	return [...unmodifiedElements, ...newModifiedElements];
}

export const addSectionToState =
	(section: FormSection, afterId: string) =>
	(state: FormState): FormState => {
		// Sort the sections by order
		let sortedSections = sortByOrder(Object.values(state.sections));
		// Find the index of the section after which the new section should be added
		const existingSectionIdx = R.findIndex(R.propEq('id', afterId), sortedSections);
		const newIndex = existingSectionIdx + 1;
		// Insert the new section at the correct position
		sortedSections = R.insert(newIndex, section, sortedSections);
		// Recalculate the order of all the sections
		sortedSections = setOrderByIndex(sortedSections);
		// mark the updated items as modified, here the `order` will change only from the new index
		sortedSections = markAsModified(sortedSections, newIndex);

		// compute the state
		return {
			...state,
			sections: R.indexBy(R.prop('id'), sortedSections),
			// Open the new section
			openElement: section.id,
		};
	};

export const moveSection =
	(id: string, newIndex: number) =>
	(state: FormState): FormState => {
		// Sort the sections by order
		let sortedSections = sortByOrder(Object.values(state.sections));
		// Find the current index of the section
		const currentIndex = R.findIndex(R.propEq('id', id), sortedSections);
		// If the element is not found
		if (currentIndex < 0) {
			return state;
		}
		// Move the element to the new index
		sortedSections = R.move(currentIndex, newIndex, sortedSections);
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
			sections: R.indexBy(R.prop('id'), sortedSections),
			// close any open elements
			openElement: '',
		};
	};

export const addElementToState =
	(element: FormElement, afterId?: string) =>
	(state: FormState): FormState => {
		// we need to filter the elements by section to set the order
		const elements = Object.values(state.elements).filter(R.propEq('belongsTo', element.belongsTo));
		// Sort the elements by order
		let sortedElements = sortByOrder(elements);
		// Find the index of the element after which the new element should be added
		const existingElementIdx = afterId ? R.findIndex(R.propEq('id', afterId), sortedElements) : -1;

		// If the element is not found, new index is -1 (end of the list)
		const newIndex = existingElementIdx < 0 ? -1 : existingElementIdx + 1;

		// Insert the new element at the correct position
		sortedElements = R.insert(newIndex, element, sortedElements);

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
				...R.indexBy(R.prop('id'), sortedElements),
			},
			// Open the new element
			openElement: element.id,
		};
	};

export const moveElement =
	(id: string, newIndex: number, sectionId: string) =>
	(state: FormState): FormState => {
		// Change/Set the section Id for the element
		const elementsMap = {
			...state.elements,
			[id]: {
				...state.elements[id],
				belongsTo: sectionId,
			},
		};
		// we need to filter the elements by section to set the order
		const elements = Object.values(elementsMap).filter(R.propEq('belongsTo', sectionId));
		// Sort the elements by order
		let sortedElements = sortByOrder(elements);
		// Find the current index of the section
		const currentIndex = R.findIndex(R.propEq('id', id), sortedElements);
		// If the element is not found
		if (currentIndex < 0) {
			return state;
		}
		// Move the element to the new index
		sortedElements = R.move(currentIndex, newIndex, sortedElements);

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
				...R.indexBy(R.prop('id'), sortedElements),
			},
			// close any open elements
			openElement: '',
		};
	};

export const copySectionElements =
	(copyFromSectionId: string, newSectionId: string) =>
	(state: FormState): FormState => {
		// We also need to copy the elements of the section
		let sectionElements: Array<FormElement> = [];
		// Lets get all the elements that belong to the copied section
		sectionElements = Object.values(state.elements).filter(R.propEq('belongsTo', copyFromSectionId));
		// Change the id and belongsTo for all the elements
		sectionElements = sectionElements.map((elem) => ({
			...elem,
			id: uuid(),
			belongsTo: newSectionId,
			isNew: true,
		}));

		return {
			...state,
			elements: {
				// Since we filtered the elements by section, we need to retain other elements
				...state.elements,
				...R.indexBy(R.prop('id'), sectionElements),
			},
		};
	};

export const getSectionElementIds = (state: FormState, sectionId: string): Array<string> => {
	return Object.values(state.elements)
		.filter(R.propEq('belongsTo', sectionId))
		.map(({ id }) => id);
};
