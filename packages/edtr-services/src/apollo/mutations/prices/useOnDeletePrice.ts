import { useCallback } from 'react';

import useUpdatePriceCache from './useUpdatePriceCache';
import type { PriceMutationCallbackFn, PriceMutationCallbackFnArgs } from '../types';
import { useRelations } from '@eventespresso/services';

const useOnDeletePrice = (): PriceMutationCallbackFn => {
	const { dropRelations, removeRelation } = useRelations();

	const updatePriceCache = useUpdatePriceCache();

	const onDeletePrice = useCallback(
		({ cache, prices, price, deletePermanently }: PriceMutationCallbackFnArgs): void => {
			const { id: priceId } = price;
			const action = deletePermanently ? 'remove' : 'update';
			if (priceId && deletePermanently) {
				// Remove the price from all tickets relations
				removeRelation({
					entity: 'prices',
					entityId: priceId,
					relation: 'tickets',
				});
				// Drop all the relations for the price
				dropRelations({
					entity: 'prices',
					entityId: priceId,
				});
			}
			// Update price cache.
			updatePriceCache({ cache, prices, price: { ...price, isTrashed: true }, action });
		},
		[dropRelations, removeRelation, updatePriceCache]
	);

	return onDeletePrice;
};

export default useOnDeletePrice;
