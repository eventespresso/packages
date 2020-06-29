import { useCallback } from 'react';

import { useRelations } from '@eventespresso/services';
import { isDefaultTax } from '@eventespresso/predicates';
import { EntityId } from '@eventespresso/data';
import { TpcPriceModifier } from '../types';

type Callback = (price: TpcPriceModifier) => void;
/**
 * Default tax needs to be removed only from ticket relations
 */
const useRemoveDefaultTax = (ticketId: EntityId): Callback => {
	const { removeRelation } = useRelations();

	return useCallback<Callback>(
		(price) => {
			// if it's a default tax and we are editing an existing ticket, not creating a new one
			// why would we remove a relation that does not exist ¯\_(ツ)_/¯
			if (isDefaultTax(price) && ticketId) {
				removeRelation({
					entity: 'tickets',
					entityId: ticketId,
					relation: 'prices',
					relationId: price.id,
				});
			}
		},
		[removeRelation, ticketId]
	);
};

export default useRemoveDefaultTax;
