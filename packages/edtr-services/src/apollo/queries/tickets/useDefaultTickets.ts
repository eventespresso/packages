import { useMemoStringify } from '@eventespresso/hooks';
import { useTicketsQuery } from '@eventespresso/data';
import { getCacheIds } from '@eventespresso/predicates';

import useTicketQueryOptions from './useTicketQueryOptions';
import type { Ticket, TicketEdge } from '../../types';

const datetimeIn = [];
const queryArgs = { isDefault: true };

const useDefaultTickets = (): Array<Ticket> => {
	const options = useTicketQueryOptions(datetimeIn, queryArgs);

	const { data } = useTicketsQuery<TicketEdge>({
		...options,
		// TODO remove this after DOM data for default ticket
		fetchPolicy: 'cache-first',
	});

	const nodes = data?.espressoTickets?.nodes || [];

	const cacheIds = getCacheIds(nodes);

	return useMemoStringify(nodes, cacheIds);
};

export default useDefaultTickets;
