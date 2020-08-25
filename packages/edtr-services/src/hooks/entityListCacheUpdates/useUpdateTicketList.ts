import { useMemo } from 'react';

import useUpdateEntityList from './useUpdateEntityList';
import { TicketsList, useTicketQueryOptions } from '../../apollo';
import { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';

const useUpdateTicketList = (
	writeQueryOptions: WriteQueryOptions<TicketsList> = undefined
): CacheUpdaterFn<TicketsList> => {
	const queryOptions = useTicketQueryOptions();
	const options = useMemo(
		() => ({
			...queryOptions,
			...writeQueryOptions,
		}),
		[queryOptions, writeQueryOptions]
	);
	return useUpdateEntityList<TicketsList>(options);
};

export default useUpdateTicketList;
