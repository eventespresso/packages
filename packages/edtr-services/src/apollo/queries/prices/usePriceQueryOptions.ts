import { useMemo } from 'react';
import { identity, sortBy } from 'ramda';

import useTicketIds from '../tickets/useTicketIds';
import { GET_PRICES } from '../prices';
import type { EntityId, CacheQueryOptions } from '@eventespresso/data';

const EMPTY_ARRAY: EntityId[] = [];

const usePriceQueryOptions = (ticketIn = EMPTY_ARRAY): CacheQueryOptions => {
	const ticketIds = useTicketIds();

	return useMemo<CacheQueryOptions>(() => {
		let newTicketIn = ticketIn.length ? ticketIn : ticketIds;

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
