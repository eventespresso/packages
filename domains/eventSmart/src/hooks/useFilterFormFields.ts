import { useEffect } from 'react';
import { adjust, findIndex, lensProp, pipe, propEq, set } from 'ramda';

import { hooks, Filters } from '@eventespresso/edtr-services';
import { SectionList } from '@eventespresso/form';

import { NAMESPACE } from '../constants';
import { useCanUseAdvancedEditor } from './useCanUseAdvancedEditor';

const ticketForm: keyof Filters = 'eventEditor.ticketForm.sections';
const dateForm: keyof Filters = 'eventEditor.dateForm.sections';

const isDisabledLens = lensProp<any>('isDisabled');
const fieldsLens = lensProp<any>('fields');

/**
 * A custom hook to disable fields in entity edit forms
 */
export const useFilterFormFields = (): void => {
	const canUseEdtr = useCanUseAdvancedEditor();

	useEffect(() => {
		// bail early if all good
		if (canUseEdtr) {
			return;
		}
		const setIsDisabled = set(isDisabledLens, !canUseEdtr);
		const filterBasicsSection = (sections: SectionList) => {
			//#region Update basics section
			// find the index of Ticket basics section
			const basicsSectionIndex = findIndex(propEq('name', 'basics'), sections);

			// fields of the basics section
			const basicsFields = sections[basicsSectionIndex]?.fields;

			// Index of the concerned fields
			const descriptionIndex = findIndex(propEq('name', 'description'), basicsFields);

			// update each field
			const updatedBasicsFields = adjust(descriptionIndex, setIsDisabled, basicsFields);
			//#endregion

			// update the section with updated fields
			return adjust(basicsSectionIndex, set(fieldsLens, updatedBasicsFields), sections);
		};

		const filterTicketDetailsSection = (sections: SectionList) => {
			//#region Update details section
			// find the index of Ticket Details section
			const detailsSectionIndex = findIndex(propEq('name', 'details'), sections);

			// fields of the details section
			const detailsFields = sections[detailsSectionIndex]?.fields;
			const numberOfUsesIndex = findIndex(propEq('name', 'uses'), detailsFields);
			const minQuantityIndex = findIndex(propEq('name', 'min'), detailsFields);
			const maxQuantityIndex = findIndex(propEq('name', 'max'), detailsFields);

			// update each field
			const updatedDetailsFields = pipe(
				adjust(numberOfUsesIndex, setIsDisabled),
				adjust(minQuantityIndex, setIsDisabled),
				adjust(maxQuantityIndex, setIsDisabled)
			)(detailsFields);
			//#region

			// update the section with updated fields
			return adjust(detailsSectionIndex, set(fieldsLens, updatedDetailsFields), sections);
		};

		hooks.addFilter(dateForm, NAMESPACE, filterBasicsSection);
		hooks.addFilter(ticketForm, NAMESPACE, filterBasicsSection);
		hooks.addFilter(ticketForm, NAMESPACE, filterTicketDetailsSection);

		// housekeeping
		return () => hooks.removeFilter(ticketForm, NAMESPACE);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
