import useUpdateEntityList from './useUpdateEntityList';
import { PricesList, usePriceQueryOptions } from '../../apollo';
import { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';

const useUpdatePriceList = (
	writeQueryOptions: WriteQueryOptions<PricesList> = undefined
): CacheUpdaterFn<PricesList> => {
	const queryOptions = usePriceQueryOptions();
	return useUpdateEntityList<PricesList>({
		...queryOptions,
		...writeQueryOptions,
	});
};

export default useUpdatePriceList;
