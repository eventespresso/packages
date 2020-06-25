import { useCallback } from 'react';

import useUpdatePriceCache from './useUpdatePriceCache';
import type { PriceMutationCallbackFn, PriceMutationCallbackFnArgs } from '../types';
import { useRelations } from '@eventespresso/services';

const useOnCreatePrice = (): PriceMutationCallbackFn => {
	const { updateRelations } = useRelations();

	const updatePriceCache = useUpdatePriceCache();

	const onCreatePrice = useCallback(
		({ proxy, price, prices, priceTypeId }: PriceMutationCallbackFnArgs): void => {
			const { id: priceId } = price;
			if (priceId && priceTypeId) {
				updateRelations({
					entity: 'prices',
					entityId: priceId,
					relation: 'priceTypes',
					relationIds: [priceTypeId],
				});
			}
			// Update price cache.
			updatePriceCache({ proxy, prices, price, action: 'add' });
		},
		[updatePriceCache, updateRelations]
	);

	return onCreatePrice;
};

export default useOnCreatePrice;
