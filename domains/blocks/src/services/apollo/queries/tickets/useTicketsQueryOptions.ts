import { useMemo } from 'react';

import type { QueryOptions } from '@eventespresso/data';

import { TicketsList } from '@blocksServices/apollo/types';
import { GET_TICKETS } from './queries';

const useTicketsQueryOptions = (datetime?: string): QueryOptions<TicketsList> => {
	return useMemo<QueryOptions<TicketsList>>(
		() => ({
			query: GET_TICKETS,
			variables: {
				where: {
					first: 100,
					datetime,
				},
			},
			fetchPolicy: 'cache-first',
		}),
		[datetime]
	);
};

export default useTicketsQueryOptions;
