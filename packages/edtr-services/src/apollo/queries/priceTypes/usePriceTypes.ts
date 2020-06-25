import type { PriceType, PriceTypesList } from '../../types';
import { useCacheQuery } from '@eventespresso/data';
import { useMemoStringify } from '@eventespresso/services';
import usePriceTypeQueryOptions from './usePriceTypeQueryOptions';
import { getCacheIds } from '@eventespresso/predicates';

/**
 * A custom react hook for retrieving all the priceTypes from cache
 */
const usePriceTypes = (): PriceType[] => {
	const options = usePriceTypeQueryOptions();
	const { data } = useCacheQuery<PriceTypesList>(options);

	const nodes = data?.espressoPriceTypes?.nodes || [];

	const cacheIds = getCacheIds(nodes);

	return useMemoStringify(nodes, cacheIds);
};

export default usePriceTypes;
