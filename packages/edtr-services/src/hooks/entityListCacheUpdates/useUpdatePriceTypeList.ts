import useUpdateEntityList from './useUpdateEntityList';
import { PriceTypesList, usePriceTypeQueryOptions } from '../../apollo';
import { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';

const useUpdatePriceTypeList = (
	writeQueryOptions: WriteQueryOptions<PriceTypesList> = undefined
): CacheUpdaterFn<PriceTypesList> => {
	const queryOptions = usePriceTypeQueryOptions();
	return useUpdateEntityList<PriceTypesList>({
		...queryOptions,
		...writeQueryOptions,
	});
};

export default useUpdatePriceTypeList;
