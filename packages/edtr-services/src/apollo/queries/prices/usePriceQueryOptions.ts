import { useMemo } from 'react';
import { identity, sortBy } from 'ramda';

import type { EntityId, CacheQueryOptions } from '@eventespresso/data';

import useTicketIds from '../tickets/useTicketIds';
import { GET_PRICES } from '../prices';

const usePriceQueryOptions = (ticketIn?: EntityId[]): CacheQueryOptions => {
	const ticketIds = useTicketIds();

	return useMemo<CacheQueryOptions>(() => {
		let newTicketIn = ticketIn || ticketIds;

		// Sort the IDs list which may be out of order,
		// thus changing the key used to access apollo cache
		newTicketIn = sortBy(identity, newTicketIn);

		return {
			query: GET_PRICES,
			variables: {
				where: {
					ticketIn: newTicketIn,
					includeDefaultPrices: true,
				},
			},
		};
	}, [ticketIds, ticketIn]);
};

export default usePriceQueryOptions;
