import { useCallback, useMemo, useReducer } from 'react';

import { EdtrState, EdtrStateManager } from './types';
import reducer from './reducer';

// create shorter alias to use at multiple places.
type ESM = EdtrStateManager;

const initialState: EdtrState = {
	visibleDatetimeIds: [],
	visibleTicketIds: [],
	pricesPollInterval: 0, // no polling by default
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

	const setPricesPollInterval: ESM['setPricesPollInterval'] = useCallback((pricesPollInterval) => {
		dispatch({
			type: 'SET_PRICES_POLL_INTERVAL',
			pricesPollInterval,
		});
	}, []);

	return useMemo(
		() => ({
			...state,
			getState,
			setVisibleDatetimeIds,
			setVisibleTicketIds,
			setPricesPollInterval,
		}),
		[getState, setPricesPollInterval, setVisibleDatetimeIds, setVisibleTicketIds, state]
	);
};

export default useEdtrStateManager;
