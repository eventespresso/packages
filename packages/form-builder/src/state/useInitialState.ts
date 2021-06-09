import { useCallback } from 'react';
import * as R from 'ramda';

import type { StateInitializer } from './types';
import type { FormStateProviderProps } from '../context';

/**
 * Initializes the data state dynamically.
 */
export const useInitialState = ({ initialSections, initialElements }: FormStateProviderProps): StateInitializer => {
	return useCallback<StateInitializer>(
		(initialState) => {
			const sections = R.indexBy(R.prop('UUID'), initialSections || []);
			const elements = R.indexBy(R.prop('UUID'), initialElements || []);

			return { ...initialState, sections, elements };
		},
		[initialElements, initialSections]
	);
};
