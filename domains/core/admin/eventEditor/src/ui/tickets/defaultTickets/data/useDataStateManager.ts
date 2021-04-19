import { useCallback, useMemo, useReducer } from 'react';

import type { DataStateManager, DataStateManagerHook } from './types';
import useDataReducer, { initialState } from './useDataStateReducer';
import useInitialState from './useInitialState';

type DSM = DataStateManager;

const useDataStateManager: DataStateManagerHook = () => {
	const initializer = useInitialState();
	const dataReducer = useDataReducer(initializer);
	const [state, dispatch] = useReducer(dataReducer, initialState, initializer);

	const getData: DSM['getData'] = useCallback(() => state, [state]);

	const addTicket: DSM['addTicket'] = useCallback((ticket) => {
		dispatch({
			type: 'ADD_TICKET',
			ticket,
		});
	}, []);

	const updateTicket: DSM['updateTicket'] = useCallback((id, ticket) => {
		dispatch({
			type: 'UPDATE_TICKET',
			id,
			ticket,
		});
	}, []);

	const deleteTicket: DSM['deleteTicket'] = useCallback((id, isNew) => {
		if (!isNew) {
			dispatch({
				type: 'ADD_TICKET_TO_DELETED',
				id,
			});
		}
		dispatch({
			type: 'DELETE_TICKET',
			id,
		});
	}, []);

	const reset: DSM['reset'] = useCallback(() => {
		dispatch({ type: 'RESET' });
	}, []);

	return useMemo(
		() => ({
			...state,
			addTicket,
			deleteTicket,
			getData,
			updateTicket,
			reset,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[state]
	);
};

export default useDataStateManager;
