import { useCallback } from 'react';

import { wait } from '@eventespresso/utils';

import { FormState, useFormState } from '../state';

type MutateSectionsCb = (sections: FormState['sections'], deletedSections?: Array<string>) => Promise<void>;

export const useMutateSections = (): MutateSectionsCb => {
	const { markSectionAsSaved, markSectionAsDeleted } = useFormState();

	return useCallback(
		async (sections, deletedSections = []) => {
			// Fire the network requests then await later
			const savedSections = Promise.all(
				Object.values(sections).map(async (section) => {
					if (section.isNew) {
						console.log('creating section...', section);
						// emulate network request
						await wait(1500);
						return section;
					} else if (section.isModified) {
						console.log('updating section...', section);
						// emulate network request
						await wait(1500);
						return section;
					}
					return null;
				})
			);

			if (deletedSections?.length) {
				// Delete all unlucky ones
				await Promise.all(
					deletedSections.map(async (id) => {
						console.log('deleting section...', id);
						// emulate network request
						await wait(1000);
						markSectionAsDeleted({ id });
					})
				);
			}

			// await the save request
			(await savedSections).filter(Boolean).forEach((section) => {
				markSectionAsSaved({ id: section.id, section });
			});
		},
		[markSectionAsDeleted, markSectionAsSaved]
	);
};
