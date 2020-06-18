import useUpdateEntityList from './useUpdateEntityList';
import { TicketsList, useTicketQueryOptions } from '../../apollo';
import { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';

const useUpdateTicketList = (
	writeQueryOptions: WriteQueryOptions<TicketsList> = undefined
): CacheUpdaterFn<TicketsList> => {
	const queryOptions = useTicketQueryOptions();
	return useUpdateEntityList<TicketsList>({
		...queryOptions,
		...writeQueryOptions,
	});
};

export default useUpdateTicketList;
