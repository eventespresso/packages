import { useMemo } from 'react';

import { entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { entityListCacheIdString, useRelations} from '@eventespresso/services';
import usePrices from './usePrices';
import type { Price } from '../../types';
import type { RelatedEntitiesHook } from '../types';

const useRelatedPrices: RelatedEntitiesHook<Price, 'prices'> = ({ entity, entityId }) => {
	const prices = usePrices();
	const { getRelations } = useRelations();
	const relatedPriceIds = getRelations({
		entity,
		entityId,
		relation: 'prices',
	});

	const cacheIds = entityListCacheIdString(prices);
	const relatedPriceIdsStr = JSON.stringify(relatedPriceIds);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => entitiesWithGuIdInArray(prices, relatedPriceIds), [relatedPriceIdsStr, cacheIds]);
};

export default useRelatedPrices;
