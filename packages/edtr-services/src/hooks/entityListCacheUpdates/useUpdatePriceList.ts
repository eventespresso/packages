import useUpdateEntityList from './useUpdateEntityList';
import { PricesList, usePriceQueryOptions } from '../../apollo';
import { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';
import { useMemo } from 'react';

const useUpdatePriceList = (
	writeQueryOptions: WriteQueryOptions<PricesList> = undefined
): CacheUpdaterFn<PricesList> => {
	const queryOptions = usePriceQueryOptions();
	const options = useMemo(
		() => ({
			...queryOptions,
			...writeQueryOptions,
		}),
		[queryOptions, writeQueryOptions]
	);
	return useUpdateEntityList<PricesList>(options);
};

export default useUpdatePriceList;
