import { useCallback } from 'react';

import type { FormSection } from '../types';
import { useFormState } from '../state';

type OnChangeValue = (field: keyof FormSection) => (value: any) => void;

/**
 * Returns an onChange handler for field inputs of a section settings
 */
export const useUpdateSection = (formSection: FormSection): OnChangeValue => {
	const { updateSection } = useFormState();

	return useCallback<OnChangeValue>(
		(field) => (value) => {
			updateSection({ id: formSection.id, section: { [field]: value } });
		},
		[formSection.id, updateSection]
	);
};
