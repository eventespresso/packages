import { useMemo } from 'react';

import useUpdateEntityList from './useUpdateEntityList';
import { useDatetimeQueryOptions, DatetimesList } from '../../apollo';
import { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';

const useUpdateDatetimeList = (
	writeQueryOptions: WriteQueryOptions<DatetimesList> = undefined
): CacheUpdaterFn<DatetimesList> => {
	const queryOptions = useDatetimeQueryOptions();
	const options = useMemo(
		() => ({
			...queryOptions,
			...writeQueryOptions,
		}),
		[queryOptions, writeQueryOptions]
	);
	return useUpdateEntityList<DatetimesList>(options);
};

export default useUpdateDatetimeList;
