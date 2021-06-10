import { useMemo } from 'react';
import { useFormState } from 'react-final-form';

import { evalFieldConditions } from '../utils';
import type { FieldConditions } from '../types';

const subscription = { values: true };
const useShouldBeVisible = (conditions: FieldConditions, fieldName: string): boolean => {
	const { values: formValues } = useFormState({ subscription });
	return useMemo<boolean>(
		() => evalFieldConditions(conditions, formValues, fieldName),
		[conditions, fieldName, formValues]
	);
};

export default useShouldBeVisible;
