import { useEffect } from 'react';
import { adjust, findIndex, lensProp, pipe, propEq, set } from 'ramda';

import { hooks, Filters } from '@eventespresso/edtr-services';

import { NAMESPACE } from '../constants';
import { useCanUseEdtr } from './useCanUseEdtr';

const filterName: keyof Filters = 'eventEditor.ticketForm.sections';

const isDisabledLens = lensProp<any>('isDisabled');
const fieldsLens = lensProp<any>('fields');

/**
 * A custom hook to disable fields in Ticket edit form
 */
export const useTicketFormSections = (): void => {
	const canUseEdtr = useCanUseEdtr();

	useEffect(() => {
		hooks.addFilter(filterName, NAMESPACE, (sections) => {
			// find the index of Ticket Details section
			const detailsSectionIndex = findIndex(propEq('name', 'details'), sections);

			// fields of the details section
			const detailsFields = sections[detailsSectionIndex]?.fields;

			// Index of the concerned fields
			const numberOfUsesIndex = findIndex(propEq('name', 'uses'), detailsFields);
			const minQuantityIndex = findIndex(propEq('name', 'min'), detailsFields);
			const maxQuantityIndex = findIndex(propEq('name', 'max'), detailsFields);

			const setIsDisabled = set(isDisabledLens, !canUseEdtr);

			// update each field
			const updatedFields = pipe(
				adjust(numberOfUsesIndex, setIsDisabled),
				adjust(minQuantityIndex, setIsDisabled),
				adjust(maxQuantityIndex, setIsDisabled)
			)(detailsFields);

			// update the section with updated fields
			return adjust(detailsSectionIndex, set(fieldsLens, updatedFields), sections);
		});

		// housekeeping
		return () => hooks.removeFilter(filterName, NAMESPACE);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
