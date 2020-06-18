import { Ticket, TicketEdge } from '../../types';
import { getCacheIds, useMemoStringify } from '@eventespresso/services';
import { useTicketsQuery } from '@eventespresso/data';
import useTicketQueryOptions from './useTicketQueryOptions';

const useTickets = (): Array<Ticket> => {
	const options = useTicketQueryOptions();

	const { data } = useTicketsQuery<TicketEdge>(options);

	const nodes = data?.espressoTickets?.nodes || [];

	const cacheIds = getCacheIds(nodes);

	return useMemoStringify(nodes, cacheIds);
};

export default useTickets;
