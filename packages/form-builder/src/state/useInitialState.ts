import { useCallback } from 'react';
import * as R from 'ramda';

import type { StateInitializer } from './types';
import type { FormStateProviderProps } from '../context';
import { parseRawElement, parseRawSection } from './utils';

export type UseInitialState = (props: Omit<FormStateProviderProps, 'onChange'>) => StateInitializer;

/**
 * Initializes the data state dynamically.
 */
export const useInitialState: UseInitialState = ({ initialElements, initialSections }) => {
	return useCallback<StateInitializer>(
		(initialState) => {
			const parsedElements = (initialElements || []).map(parseRawElement);
			const parsedSections = (initialSections || []).map(parseRawSection);

			const elements = R.indexBy(R.prop('id'), parsedElements);
			const sections = R.indexBy(R.prop('id'), parsedSections);

			return { ...initialState, sections, elements };
		},
		[initialElements, initialSections]
	);
};
