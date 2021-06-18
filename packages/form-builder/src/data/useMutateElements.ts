import { useCallback } from 'react';

import { FormState, useFormState } from '../state';
import { useElementMutator } from './useElementMutator';

type MutateElementsCb = (elements: FormState['elements'], deletedElements?: Array<string>) => Promise<void>;

export const useMutateElements = (): MutateElementsCb => {
	const { markElementAsSaved, markElementAsDeleted } = useFormState();

	const { createEntity, updateEntity, deleteEntity } = useElementMutator();

	return useCallback(
		async (elements, deletedElements = []) => {
			// Fire the network requests then await later
			const savedElements = Promise.all(
				Object.values(elements).map(async (element) => {
					if (element.isNew) {
						try {
							await createEntity(element);
							return element;
						} catch (error) {
							// TODO handle error
						}
					} else if (element.isModified) {
						try {
							await updateEntity(element);
							return element;
						} catch (error) {
							// TODO handle error
						}
					}
					return null;
				})
			);

			if (deletedElements?.length) {
				// Delete all unlucky ones
				await Promise.all(
					deletedElements.map(async (id) => {
						try {
							await deleteEntity({ id });
							markElementAsDeleted({ id });
						} catch (error) {
							// TODO handle error
						}
					})
				);
			}

			// await the save request
			(await savedElements).filter(Boolean).forEach((element) => {
				markElementAsSaved({ id: element.id, element });
			});
		},
		[createEntity, deleteEntity, markElementAsDeleted, markElementAsSaved, updateEntity]
	);
};
