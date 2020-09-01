import { useCallback, useMemo } from 'react';

import { RRuleConfig } from '../types';
import { StateInitializer } from './types';
import { computeRRuleFromString, getDefaultRRuleState } from '../utils';

/**
 * Initializes the state dynamically by using the config.
 */
const useInitialState = (config: RRuleConfig, rRuleString?: string): StateInitializer => {
	const defaultState = useMemo(() => getDefaultRRuleState(config), [config]);

	return useCallback<StateInitializer>(
		(initialState) => {
			// if rRule string is provided, use it to generate initial state
			const state = rRuleString ? computeRRuleFromString(defaultState, rRuleString) : defaultState;

			return { ...initialState, ...state };
		},
		[rRuleString, defaultState]
	);
};

export default useInitialState;
