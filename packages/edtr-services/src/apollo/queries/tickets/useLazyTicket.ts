import { useCallback } from 'react';

import { useLazyCacheQuery, EntityId } from '@eventespresso/data';

import { GET_TICKET } from './queries';
import type { Ticket, TicketItem } from '../../types';

type Callback = (id: EntityId) => Ticket;

const useLazyTicket = (): Callback => {
	const getData = useLazyCacheQuery<TicketItem>();

	return useCallback<Callback>(
		(id) => {
			const data = getData({
				query: GET_TICKET,
				variables: {
					id,
				},
			});
			return data?.ticket;
		},
		[getData]
	);
};

export default useLazyTicket;
