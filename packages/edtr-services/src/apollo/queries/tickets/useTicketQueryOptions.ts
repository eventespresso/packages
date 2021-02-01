import { useMemo } from 'react';

import type { TicketsList, TicketsQueryArgs, CacheQueryOptions } from '@eventespresso/data';

import { GET_TICKETS } from '../tickets';
import type { TicketEdge } from '../../';
import useEventId from '../events/useEventId';

export type TicketsQueryOptions = CacheQueryOptions<TicketsList<TicketEdge>, TicketsQueryArgs>;

const useTicketQueryOptions = (queryArgs?: TicketsQueryArgs['where']): TicketsQueryOptions => {
	const eventId = useEventId();

	return useMemo<TicketsQueryOptions>(() => {
		return {
			query: GET_TICKETS,
			variables: {
				where: {
					eventId,
					includeDefaultTickets: true,
					...queryArgs,
				},
			},
		};
	}, [eventId, queryArgs]);
};

export default useTicketQueryOptions;
