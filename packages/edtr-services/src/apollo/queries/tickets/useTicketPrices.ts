import { useMemo } from 'react';
import { uniq } from 'ramda';

import { entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { useRelations } from '@eventespresso/services';
import { EntityId } from '@eventespresso/data';
import { usePrices } from '../prices';
import type { Price } from '../../types';
/**
 * A custom react hook for retrieving the related prices
 * for the given `ticket` identified by `ticket.id`
 *
 * @param {string|string[]}  ticketId ticket.id
 */
const useTicketPrices = (ticketId: EntityId | Array<EntityId>): Price[] => {
	const prices = usePrices();
	const { getRelations } = useRelations();

	// if single ticketId is passed, convert it to array.
	const ticketIds = Array.isArray(ticketId) ? ticketId : [ticketId];
	// get related price ids for all the ticket ids
	let allRelatedPricesIds = ticketIds.reduce<Array<EntityId>>((priceIds, ticketId) => {
		const relatedPricesIds = getRelations({
			entity: 'tickets',
			entityId: ticketId,
			relation: 'prices',
		});
		return [...priceIds, ...relatedPricesIds];
	}, []);

	// default taxes may be repeated.
	allRelatedPricesIds = uniq(allRelatedPricesIds);

	const relatedPriceIdsStr = JSON.stringify(allRelatedPricesIds);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => entitiesWithGuIdInArray(prices, allRelatedPricesIds), [relatedPriceIdsStr, prices]);
};

export default useTicketPrices;
