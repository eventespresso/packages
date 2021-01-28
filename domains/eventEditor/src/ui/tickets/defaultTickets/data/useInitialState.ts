import { useCallback } from 'react';

import { useDefaultTickets, useDefaultTicketsPrices } from '@eventespresso/edtr-services';
import { idToEntityMap } from '@eventespresso/predicates';

import type { StateInitializer } from './types';

/**
 * Initializes the data state dynamically.
 */
const useInitialState = (): StateInitializer => {
	const defaultTickets = useDefaultTickets();
	useDefaultTicketsPrices();

	return useCallback<StateInitializer>(
		(initialState) => {
			const normalizedTickets = defaultTickets.map((ticket) => ({ ...ticket, prices: [] }));

			const tickets = idToEntityMap(normalizedTickets);
			return { ...initialState, tickets };
		},
		[defaultTickets]
	);
};

export default useInitialState;
