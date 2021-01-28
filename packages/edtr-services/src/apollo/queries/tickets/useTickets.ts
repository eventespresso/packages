import { useMemoStringify } from '@eventespresso/hooks';
import { useTicketsQuery } from '@eventespresso/data';
import { getCacheIds } from '@eventespresso/predicates';

import useTicketQueryOptions, { TicketsQueryOptions } from './useTicketQueryOptions';
import type { Ticket, TicketEdge } from '../../types';

const useTickets = (queryOptions?: TicketsQueryOptions): Array<Ticket> => {
	const options = useTicketQueryOptions();

	const { data } = useTicketsQuery<TicketEdge>(queryOptions || options);

	const nodes = data?.espressoTickets?.nodes || [];

	const cacheIds = getCacheIds(nodes);

	return useMemoStringify(nodes, cacheIds);
};

export default useTickets;
