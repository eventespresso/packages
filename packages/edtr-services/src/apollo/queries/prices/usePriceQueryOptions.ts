import { useMemo } from 'react';

import type { PricesList, PricesQueryArgs, CacheQueryOptions } from '@eventespresso/data';

import { GET_PRICES } from '../prices';
import useEventId from '../events/useEventId';
import type { PriceEdge } from '../../';

export type PricesQueryOptions = CacheQueryOptions<PricesList<PriceEdge>, PricesQueryArgs>;

const usePriceQueryOptions = (queryArgs?: PricesQueryArgs['where']): PricesQueryOptions => {
	const eventId = useEventId();

	return useMemo(() => {
		return {
			query: GET_PRICES,
			variables: {
				where: {
					eventId,
					includeDefaultTicketsPrices: true,
					includeDefaultPrices: true,
					...queryArgs,
				},
			},
		};
	}, [eventId, queryArgs]);
};

export default usePriceQueryOptions;
