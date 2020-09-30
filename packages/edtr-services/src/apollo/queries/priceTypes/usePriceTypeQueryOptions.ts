import { useMemo } from 'react';
import { CacheQueryOptions } from '@eventespresso/data';

import { GET_PRICE_TYPES } from '../priceTypes';

const usePriceTypeQueryOptions = (): CacheQueryOptions => {
	const options: CacheQueryOptions = useMemo(
		() => ({
			query: GET_PRICE_TYPES,
		}),
		[]
	);

	return options;
};

export default usePriceTypeQueryOptions;
