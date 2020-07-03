import type { Ticket, TicketEdge } from '../../types';
import { useMemoStringify } from '@eventespresso/hooks';
import { useTicketsQuery } from '@eventespresso/data';
import useTicketQueryOptions from './useTicketQueryOptions';
import { getCacheIds } from '@eventespresso/predicates';

const useTickets = (): Array<Ticket> => {
	const options = useTicketQueryOptions();

	const { data } = useTicketsQuery<TicketEdge>(options);

	const nodes = data?.espressoTickets?.nodes || [];

	const cacheIds = getCacheIds(nodes);

	return useMemoStringify(nodes, cacheIds);
};

export default useTickets;
