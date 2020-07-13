import { useCallback, useMemo, useReducer, useEffect } from 'react';

import type { FormStateManager, FormStateManagerHook } from './types';
import useDataReducer, { initialState } from './useFormStateReducer';
import useInitialState from './useInitialState';

type DSM = FormStateManager;

const useFormStateManager: FormStateManagerHook = () => {
	const initializer = useInitialState();
	const dataReducer = useDataReducer(initializer);
	const [state, dispatch] = useReducer(dataReducer, initialState, initializer);

	// temporary
	useEffect(() => {
		console.log('REM form state', state);
	}, [state]);

	const getData: DSM['getData'] = useCallback(() => state, [state]);

	const setRRule: DSM['setRRule'] = useCallback((rRule) => {
		dispatch({
			type: 'SET_R_RULE',
			rRule,
		});
	}, []);

	const setExRule: DSM['setExRule'] = useCallback((rRule) => {
		dispatch({
			type: 'SET_R_RULE',
			rRule,
		});
	}, []);

	const setDateDetails: DSM['setDateDetails'] = useCallback((dateDetails) => {
		dispatch({
			type: 'SET_DATE_DETAILS',
			dateDetails,
		});
	}, []);

	const updateDateField: DSM['updateDateField'] = useCallback((field, value) => {
		dispatch({
			type: 'SET_DATE_DETAILS',
			dateDetails: { [field]: value },
		});
	}, []);

	return useMemo(
		() => ({
			...state,
			getData,
			setDateDetails,
			setExRule,
			setRRule,
			updateDateField,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[state]
	);
};

export default useFormStateManager;
