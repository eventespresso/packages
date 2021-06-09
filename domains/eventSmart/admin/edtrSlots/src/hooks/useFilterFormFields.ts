import { useEffect } from 'react';
import * as R from 'ramda';

import { hooks, Filters } from '@eventespresso/edtr-services';
import { SectionList } from '@eventespresso/form';

import { NAMESPACE } from '../constants';
import { useCanUseAdvancedEditor } from './useCanUseAdvancedEditor';

const ticketForm: keyof Filters = 'eventEditor.ticketForm.sections';
const dateForm: keyof Filters = 'eventEditor.dateForm.sections';

const isDisabledLens = R.lensProp<any>('isDisabled');
const fieldsLens = R.lensProp<any>('fields');

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
		const setIsDisabled = R.set(isDisabledLens, !canUseEdtr);
		const filterBasicsSection = (sections: SectionList) => {
			//#region Update basics section
			// find the index of Ticket basics section
			const basicsSectionIndex = R.findIndex(R.propEq('name', 'basics'), sections);

			// fields of the basics section
			const basicsFields = sections[basicsSectionIndex]?.fields;

			// Index of the concerned fields
			const descriptionIndex = R.findIndex(R.propEq('name', 'description'), basicsFields);

			// update each field
			const updatedBasicsFields = R.adjust(descriptionIndex, setIsDisabled, basicsFields);
			//#endregion

			// update the section with updated fields
			return R.adjust(basicsSectionIndex, R.set(fieldsLens, updatedBasicsFields), sections);
		};

		const filterTicketDetailsSection = (sections: SectionList) => {
			//#region Update details section
			// find the index of Ticket Details section
			const detailsSectionIndex = R.findIndex(R.propEq('name', 'details'), sections);

			// fields of the details section
			const detailsFields = sections[detailsSectionIndex]?.fields;
			const numberOfUsesIndex = R.findIndex(R.propEq('name', 'uses'), detailsFields);
			const minQuantityIndex = R.findIndex(R.propEq('name', 'min'), detailsFields);
			const maxQuantityIndex = R.findIndex(R.propEq('name', 'max'), detailsFields);

			// update each field
			const updatedDetailsFields = R.pipe(
				R.adjust(numberOfUsesIndex, setIsDisabled),
				R.adjust(minQuantityIndex, setIsDisabled),
				R.adjust(maxQuantityIndex, setIsDisabled)
			)(detailsFields);
			//#endregion

			// update the section with updated fields
			return R.adjust(detailsSectionIndex, R.set(fieldsLens, updatedDetailsFields), sections);
		};

		hooks.addFilter(dateForm, NAMESPACE, filterBasicsSection);
		hooks.addFilter(ticketForm, `${NAMESPACE}-basics`, filterBasicsSection);
		hooks.addFilter(ticketForm, `${NAMESPACE}-details`, filterTicketDetailsSection);

		// housekeeping
		return () => {
			hooks.removeFilter(dateForm, NAMESPACE);
			hooks.removeFilter(ticketForm, `${NAMESPACE}-basics`);
			hooks.removeFilter(ticketForm, `${NAMESPACE}-details`);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
