import { CacheQueryOptions, useCacheQuery } from '@eventespresso/data';
import { useMemoStringify } from '@eventespresso/hooks';
import { getCacheIds } from '@eventespresso/predicates';

import type { Price, PricesList } from '../../types';
import usePriceQueryOptions from './usePriceQueryOptions';

/**
 * A custom react hook to retrieve all the prices from cache
 */
const usePrices = (queryOptions?: CacheQueryOptions): Price[] => {
	const options = usePriceQueryOptions();
	const { data } = useCacheQuery<PricesList>(queryOptions || options);

	const nodes = data?.espressoPrices?.nodes || [];

	const cacheIds = getCacheIds(nodes);

	return useMemoStringify(nodes, cacheIds);
};

export default usePrices;
