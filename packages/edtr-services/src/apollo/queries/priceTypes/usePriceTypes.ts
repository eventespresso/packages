import { PriceType, PriceTypesList } from '../../types';
import { useCacheQuery } from '@eventespresso/data';
import { getCacheIds, useMemoStringify } from '@eventespresso/services';
import usePriceTypeQueryOptions from './usePriceTypeQueryOptions';

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
