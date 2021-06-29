import { useCallback } from 'react';
import * as R from 'ramda';

import type { StateInitializer } from './types';
import type { FormSection } from '../types';
import type { FormStateProviderProps } from '../context';
import { belongsToNone, parseRawElement, parseRawSection } from './utils';

export type UseInitialState = (props: Omit<FormStateProviderProps, 'onChange'>) => StateInitializer;

/**
 * Initializes the data state dynamically.
 */
export const useInitialState: UseInitialState = ({ initialElements, initialSections, topLevelSectionId }) => {
	return useCallback<StateInitializer>(
		(initialState) => {
			const parsedElements = (initialElements || []).map(parseRawElement);
			const parsedSections = (initialSections || []).map(parseRawSection);

			/**
			 * If `topLevelSectionId` is not provided
			 * extract the top level section ID from the given sections
			 * It finds the first section that has no `belongsTo` field set
			 */
			const topLevelSection = topLevelSectionId || R.find<FormSection>(belongsToNone, parsedSections)?.id;

			const elements = R.indexBy(R.prop('id'), parsedElements);
			const sections = R.indexBy(R.prop('id'), parsedSections);

			return { ...initialState, topLevelSection, sections, elements };
		},
		[initialElements, initialSections, topLevelSectionId]
	);
};
