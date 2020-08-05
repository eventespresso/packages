import { useCallback, useMemo, useReducer } from 'react';

import { EdtrState, EdtrStateManager } from './types';
import reducer from './reducer';

// create shorter alias to use at multiple places.
type ESM = EdtrStateManager;

const initialState: EdtrState = {
	visibleDatetimeIds: [],
	visibleTicketIds: [],
};

const useEdtrStateManager = (): ESM => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getState: ESM['getState'] = useCallback(() => state, [state]);

	const setVisibleDatetimeIds: ESM['setVisibleDatetimeIds'] = useCallback((visibleDatetimeIds) => {
		dispatch({
			type: 'SET_VISIBLE_DATETIME_IDS',
			visibleDatetimeIds,
		});
	}, []);

	const setVisibleTicketIds: ESM['setVisibleTicketIds'] = useCallback((visibleTicketIds) => {
		dispatch({
			type: 'SET_VISIBLE_TICKET_IDS',
			visibleTicketIds,
		});
	}, []);

	return useMemo(
		() => ({
			...state,
			getState,
			setVisibleDatetimeIds,
			setVisibleTicketIds,
		}),
		[getState, setVisibleDatetimeIds, setVisibleTicketIds, state]
	);
};

export default useEdtrStateManager;
