import { useMemo } from 'react';
import { ReadQueryOptions } from '@eventespresso/data';

import { GET_PRICE_TYPES } from '../priceTypes';

const usePriceTypeQueryOptions = (): ReadQueryOptions => {
	const options: ReadQueryOptions = useMemo(
		() => ({
			query: GET_PRICE_TYPES,
		}),
		[]
	);

	return options;
};

export default usePriceTypeQueryOptions;
