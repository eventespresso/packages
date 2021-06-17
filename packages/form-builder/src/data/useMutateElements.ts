import { useCallback } from 'react';

import { wait } from '@eventespresso/utils';

import { FormState, useFormState } from '../state';

type MutateElementsCb = (elements: FormState['elements'], deletedElements?: Array<string>) => Promise<void>;

export const useMutateElements = (): MutateElementsCb => {
	const { markElementAsSaved, markElementAsDeleted } = useFormState();

	// Async to make sure that prices are handled before updating the ticket.
	return useCallback(
		async (elements, deletedElements = []) => {
			// Fire the network requests then await later
			const savedElements = Promise.all(
				Object.values(elements).map(async ({ isNew, isModified, ...element }) => {
					if (isNew) {
						console.log('creating element...', element);
						// emulate network request
						await wait(1500);
						return element;
					} else if (isModified) {
						console.log('updating element...', element);
						// emulate network request
						await wait(1500);
						return element;
					}
					return null;
				})
			);

			if (deletedElements?.length) {
				// Delete all unlucky ones
				await Promise.all(
					deletedElements.map(async (id) => {
						console.log('deleting element...', id);
						// emulate network request
						await wait(1000);
						markElementAsDeleted({ id });
					})
				);
			}

			// await the save request
			(await savedElements).filter(Boolean).forEach((element) => {
				markElementAsSaved({ id: element.id, element });
			});
		},
		[markElementAsDeleted, markElementAsSaved]
	);
};
