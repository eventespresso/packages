import { useCallback } from 'react';

import { FormState, useFormState } from '../state';
import { useSectionMutator } from './useSectionMutator';

type MutateSectionsCb = (sections: FormState['sections'], deletedSections?: Array<string>) => Promise<void>;

export const useMutateSections = (): MutateSectionsCb => {
	const { markSectionAsSaved, markSectionAsDeleted } = useFormState();

	const { createEntity, updateEntity, deleteEntity } = useSectionMutator();

	return useCallback(
		async (sections, deletedSections = []) => {
			// Fire the network requests then await later
			const savedSections = Promise.all(
				Object.values(sections).map(async (section) => {
					if (section.isNew) {
						try {
							await createEntity(section);
							return section;
						} catch (error) {
							// TODO handle error
						}
					} else if (section.isModified) {
						try {
							await updateEntity(section);
							return section;
						} catch (error) {
							// TODO handle error
						}
					}
					return null;
				})
			);

			if (deletedSections?.length) {
				// Delete all unlucky ones
				await Promise.all(
					deletedSections.map(async (id) => {
						try {
							await deleteEntity({ id });
							markSectionAsDeleted({ id });
						} catch (error) {
							// TODO handle error
						}
					})
				);
			}

			// await the save request
			(await savedSections).filter(Boolean).forEach((section) => {
				markSectionAsSaved({ id: section.id, section });
			});
		},
		[createEntity, deleteEntity, markSectionAsDeleted, markSectionAsSaved, updateEntity]
	);
};
