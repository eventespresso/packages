import { useCallback } from 'react';
import { indexBy, prop } from 'ramda';

import type { StateInitializer } from './types';
import type { FormSection } from '../types';

/**
 * Initializes the data state dynamically.
 */
export const useInitialState = (initialSections?: Array<FormSection>): StateInitializer => {
	return useCallback<StateInitializer>(
		(initialState) => {
			const sections = indexBy(prop('UUID'), initialSections || []);

			return { ...initialState, sections };
		},
		[initialSections]
	);
};
