import type { FetchQueryResult } from '@eventespresso/data';
import { useTicketsQuery } from '@eventespresso/data';

import { TicketsList } from '@blocksServices/apollo/types';
import useTicketsQueryOptions from './useTicketsQueryOptions';

const useTickets = (datetime?: string): FetchQueryResult<TicketsList> => {
	const queryOptions = useTicketsQueryOptions(datetime);
	return useTicketsQuery(queryOptions);
};

export default useTickets;
