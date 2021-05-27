import { useCallback } from 'react';
import { indexBy, prop } from 'ramda';

import type { StateInitializer } from './types';
import type { FormStateProviderProps } from '../context';

/**
 * Initializes the data state dynamically.
 */
export const useInitialState = ({ initialSections, initialElements }: FormStateProviderProps): StateInitializer => {
	return useCallback<StateInitializer>(
		(initialState) => {
			const sections = indexBy(prop('UUID'), initialSections || []);
			const elements = indexBy(prop('UUID'), initialElements || []);

			return { ...initialState, sections, elements };
		},
		[initialElements, initialSections]
	);
};
