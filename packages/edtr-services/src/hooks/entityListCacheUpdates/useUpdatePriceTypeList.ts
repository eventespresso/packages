import { useMemo } from 'react';

import useUpdateEntityList from './useUpdateEntityList';
import { PriceTypesList, usePriceTypeQueryOptions } from '../../apollo';
import { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';

const useUpdatePriceTypeList = (
	writeQueryOptions: WriteQueryOptions<PriceTypesList> = undefined
): CacheUpdaterFn<PriceTypesList> => {
	const queryOptions = usePriceTypeQueryOptions();
	const options = useMemo(
		() => ({
			...queryOptions,
			...writeQueryOptions,
		}),
		[queryOptions, writeQueryOptions]
	);
	return useUpdateEntityList<PriceTypesList>(options);
};

export default useUpdatePriceTypeList;
