import { useCallback } from 'react';

import { useDefaultTickets } from '@eventespresso/edtr-services';
import { idToEntityMap } from '@eventespresso/predicates';
import { useTicketPrices } from '@eventespresso/edtr-services';
import { usePriceToTpcModifier, preparePricesForTpc } from '@eventespresso/tpc';

import type { StateInitializer } from './types';

/**
 * Initializes the data state dynamically.
 */
const useInitialState = (): StateInitializer => {
	const defaultTickets = useDefaultTickets();
	const getTicketPrices = useTicketPrices();
	const convertPriceToTpcModifier = usePriceToTpcModifier();

	return useCallback<StateInitializer>(
		(initialState) => {
			const normalizedTickets = defaultTickets.map((ticket) => {
				// get all related prices
				const unSortedPrices = getTicketPrices(ticket.id);

				// convert to TPC price objects
				const prices = preparePricesForTpc(unSortedPrices, convertPriceToTpcModifier);

				return { ...ticket, prices };
			});

			const tickets = idToEntityMap(normalizedTickets);

			return { ...initialState, tickets };
		},
		[convertPriceToTpcModifier, defaultTickets, getTicketPrices]
	);
};

export default useInitialState;
