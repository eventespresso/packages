import { useCallback } from 'react';
import * as R from 'ramda';

import type { StateInitializer } from './types';
import type { FormStateProviderProps } from '../context';

export type UseInitialState = (props: Omit<FormStateProviderProps, 'onChange'>) => StateInitializer;

/**
 * Initializes the data state dynamically.
 */
export const useInitialState: UseInitialState = ({ initialSections, initialElements }) => {
	return useCallback<StateInitializer>(
		(initialState) => {
			const sections = R.indexBy(R.prop('id'), initialSections || []);
			const elements = R.indexBy(R.prop('id'), initialElements || []);

			return { ...initialState, sections, elements };
		},
		[initialElements, initialSections]
	);
};
