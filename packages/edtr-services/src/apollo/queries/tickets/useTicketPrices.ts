import { useCallback } from 'react';

import { entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { useRelations } from '@eventespresso/services';
import { EntityId } from '@eventespresso/data';
import { usePrices, useDefaultTicketsPrices } from '../prices';
import type { Price } from '../../types';

type GetTicketPrices = (ticketId: EntityId, isDefault?: boolean) => Array<Price>;
/**
 * A custom react hook for retrieving the related prices
 * for the given `ticket` identified by `ticket.id`
 *
 * @param {string|string[]}  ticketId ticket.id
 */
const useTicketPrices = (): GetTicketPrices => {
	const prices = usePrices();
	const defaultTicketsPrices = useDefaultTicketsPrices();
	const { getRelations } = useRelations();

	return useCallback<GetTicketPrices>(
		(ticketId, isDefault) => {
			const relatedPricesIds = getRelations({
				entity: 'tickets',
				entityId: ticketId,
				relation: 'prices',
			});

			const pricesToUse = isDefault ? defaultTicketsPrices : prices;

			return entitiesWithGuIdInArray(pricesToUse, relatedPricesIds);
		},
		[defaultTicketsPrices, getRelations, prices]
	);
};

export default useTicketPrices;
