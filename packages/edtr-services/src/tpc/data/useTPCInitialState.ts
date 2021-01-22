import { useCallback } from 'react';
import { pick } from 'ramda';

import { sortByPriceOrderIdAsc } from '@eventespresso/predicates';

import { useMemoStringify } from '@eventespresso/hooks';
import { TICKET_FIELDS_FOR_TPC } from '../../constants';
import { useTicketItem, useTicketPrices } from '../../apollo/queries/tickets';
import usePriceToTpcModifier from '../data/usePriceToTpcModifier';
import type { StateInitializer } from './types';
import type { BaseTPCProps } from '../types';
import type { Ticket } from '../../';

/**
 * Initializes the data state dynamically by
 * setting the ticket details and the related prices
 */
export const useTPCInitialState = ({ ticketId }: BaseTPCProps): StateInitializer => {
	// get the full ticket object
	const wholeTicket = useTicketItem({ id: ticketId });
	const ticket: Partial<Ticket> = useMemoStringify(wholeTicket ? pick(TICKET_FIELDS_FOR_TPC, wholeTicket) : {});

	// get all related prices
	const unSortedPrices = useTicketPrices(ticketId);
	//sort'em
	const sortedPrices = useMemoStringify(sortByPriceOrderIdAsc(unSortedPrices));

	const convertPriceToTpcModifier = usePriceToTpcModifier();
	// convert to TPC price objects by adding
	// "priceType" and "priceTypeOrder"
	const prices = useMemoStringify(sortedPrices.map(convertPriceToTpcModifier));

	return useCallback<StateInitializer>(
		(initialState) => {
			return { ...initialState, ticket, prices };
		},
		[ticket, prices]
	);
};
