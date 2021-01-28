import { useCallback } from 'react';
import { pick } from 'ramda';

import { useTicketItem, useTicketPrices } from '@eventespresso/edtr-services';
import type { Ticket } from '@eventespresso/edtr-services';
import { useMemoStringify } from '@eventespresso/hooks';

import type { StateInitializer } from './types';
import type { BaseProps } from '../types';
import { TICKET_FIELDS_TO_USE, preparePricesForTpc } from '../utils';
import { usePriceToTpcModifier } from '../hooks';

/**
 * Initializes the data state dynamically by
 * setting the ticket details and the related prices
 */
const useInitialState = ({ ticketId }: BaseProps): StateInitializer => {
	// get the full ticket object
	const wholeTicket = useTicketItem({ id: ticketId });
	const ticket: Partial<Ticket> = useMemoStringify(wholeTicket ? pick(TICKET_FIELDS_TO_USE, wholeTicket) : {});

	const getTicketPrices = useTicketPrices();

	const convertPriceToTpcModifier = usePriceToTpcModifier();

	return useCallback<StateInitializer>(
		(initialState) => {
			// get all related prices
			const unSortedPrices = getTicketPrices(ticketId);

			// convert to TPC price objects
			const prices = preparePricesForTpc(unSortedPrices, convertPriceToTpcModifier);

			return { ...initialState, ticket, prices };
		},
		[getTicketPrices, ticketId, convertPriceToTpcModifier, ticket]
	);
};

export default useInitialState;
