import { useCallback } from 'react';

import type { FormElement } from '../types';
import { useFormState } from '../state';

type OnChangeValue = (field: keyof FormElement) => (value: any) => void;

/**
 * Returns an onChange handler for field inputs of an element settings
 */
export const useUpdateElement = (element: FormElement): OnChangeValue => {
	const { updateElement } = useFormState();

	return useCallback<OnChangeValue>(
		(field) => (value) => {
			updateElement({ UUID: element.UUID, element: { [field]: value } });
		},
		[element.UUID, updateElement]
	);
};
