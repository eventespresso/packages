import { useCallback, useMemo, useReducer } from 'react';

import type { RRuleStateManager } from './types';
import useInitialState from './useInitialState';
import useRRuleStateReducer from './useRRuleStateReducer';
import { RRuleConfig } from '../types';

type RSM = RRuleStateManager;

const useRRuleStateManager = (config: RRuleConfig, rRuleString?: string): RSM => {
	const initializer = useInitialState(config, rRuleString);
	const dataReducer = useRRuleStateReducer(initializer);
	const [state, dispatch] = useReducer(dataReducer, null, initializer);

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

	const setEndMode: RSM['setEndMode'] = useCallback((endMode) => {
		dispatch({ type: 'SET_END_MODE', endMode });
	}, []);

	const setEndAfter: RSM['setEndAfter'] = useCallback((after) => {
		dispatch({ type: 'SET_END_AFTER', after });
	}, []);

	const setEndDate: RSM['setEndDate'] = useCallback((date) => {
		dispatch({ type: 'SET_END_DATE', date });
	}, []);

	const setRepeatFrequency: RSM['setRepeatFrequency'] = useCallback((frequency) => {
		dispatch({ type: 'SET_REPEAT_FREQUENCY', frequency });
	}, []);

	const setRepeatDay: RSM['setRepeatDay'] = useCallback((repeatKey, monthYearMode, day) => {
		dispatch({ type: 'SET_REPEAT_DAY', repeatKey, monthYearMode, day });
	}, []);

	const setRepeatInterval: RSM['setRepeatInterval'] = useCallback((repeatKey, interval) => {
		dispatch({ type: 'SET_REPEAT_INTERVAL', repeatKey, interval });
	}, []);

	const setRepeatMode: RSM['setRepeatMode'] = useCallback((repeatKey, mode) => {
		dispatch({ type: 'SET_REPEAT_MODE', repeatKey, mode });
	}, []);

	const setRepeatMonth: RSM['setRepeatMonth'] = useCallback((monthYearMode, month) => {
		dispatch({ type: 'SET_REPEAT_MONTH', monthYearMode, month });
	}, []);

	const setRepeatWeeklyDays: RSM['setRepeatWeeklyDays'] = useCallback((days) => {
		dispatch({ type: 'SET_REPEAT_WEEKLY_DAYS', days });
	}, []);

	const setRepeatWhich: RSM['setRepeatWhich'] = useCallback((repeatKey, which) => {
		dispatch({ type: 'SET_REPEAT_WHICH', repeatKey, which });
	}, []);

	return useMemo<RSM>(
		() => ({
			...state,
			getData,
			setData,
			setStartDate,
			setEndMode,
			setEndAfter,
			setEndDate,
			setRepeatFrequency,
			setRepeatDay,
			setRepeatInterval,
			setRepeatMode,
			setRepeatMonth,
			setRepeatWeeklyDays,
			setRepeatWhich,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[state]
	);
};

export default useRRuleStateManager;
