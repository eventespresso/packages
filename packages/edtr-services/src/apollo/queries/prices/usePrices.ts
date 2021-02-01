import { usePricesQuery } from '@eventespresso/data';
import { useMemoStringify } from '@eventespresso/hooks';
import { getCacheIds } from '@eventespresso/predicates';

import type { Price, PriceEdge } from '../../types';
import usePriceQueryOptions from './usePriceQueryOptions';

/**
 * A custom react hook to retrieve all the prices from cache
 */
const usePrices = (): Price[] => {
	const options = usePriceQueryOptions();

	const { data } = usePricesQuery<PriceEdge>(options);

	const nodes = data?.espressoPrices?.nodes || [];

	const cacheIds = getCacheIds(nodes);

	return useMemoStringify(nodes, cacheIds);
};

export default usePrices;
