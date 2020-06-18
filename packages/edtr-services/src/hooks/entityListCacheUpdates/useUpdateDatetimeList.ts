import useUpdateEntityList from './useUpdateEntityList';
import { useDatetimeQueryOptions, DatetimesList } from '../../apollo';
import { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';

const useUpdateDatetimeList = (
	writeQueryOptions: WriteQueryOptions<DatetimesList> = undefined
): CacheUpdaterFn<DatetimesList> => {
	const queryOptions = useDatetimeQueryOptions();
	return useUpdateEntityList<DatetimesList>({
		...queryOptions,
		...writeQueryOptions,
	});
};

export default useUpdateDatetimeList;
