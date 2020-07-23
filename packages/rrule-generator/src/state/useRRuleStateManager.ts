import { useCallback, useMemo, useReducer, useEffect } from 'react';

import type { RRuleStateManager } from './types';
import useInitialState from './useInitialState';
import useRRuleStateReducer from './useRRuleStateReducer';
import { RRuleConfig } from '../types';

type RSM = RRuleStateManager;

const useRRuleStateManager = (config: RRuleConfig): RSM => {
	const initializer = useInitialState(config);
	const dataReducer = useRRuleStateReducer(initializer);
	const [state, dispatch] = useReducer(dataReducer, null, initializer);

	// temporary
	useEffect(() => {
		console.log('RRule state', state);
	}, [state]);

	/**
	 * Returns the current data.
	 */
	const getData: RSM['getData'] = useCallback(() => state, [state]);

	/**
	 * Sets the rrule data.
	 */
	const setData: RSM['setData'] = useCallback((data) => {
		dispatch({ type: 'SET_DATA', data });
	}, []);

	const setStartDate: RSM['setStartDate'] = useCallback((date) => {
		dispatch({ type: 'SET_START_DATE', date });
	}, []);

	return useMemo<RSM>(
		() => ({
			...state,
			getData,
			setData,
			setStartDate,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[state]
	);
};

export default useRRuleStateManager;
