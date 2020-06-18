import { Price, PricesList } from '../../types';
import { useCacheQuery } from '@eventespresso/data';
import { getCacheIds, useMemoStringify } from '@eventespresso/services';
import usePriceQueryOptions from './usePriceQueryOptions';

/**
 * A custom react hook for retrieving all the prices from cache
 * limited to the ids passed in `include`
 */
const usePrices = (): Price[] => {
	const options = usePriceQueryOptions();
	const { data } = useCacheQuery<PricesList>(options);

	const nodes = data?.espressoPrices?.nodes || [];

	const cacheIds = getCacheIds(nodes);

	return useMemoStringify(nodes, cacheIds);
};

export default usePrices;
