import { useCallback } from 'react';
import { findIndex, update } from 'ramda';

import { WriteQueryOptions } from '@eventespresso/data';
import { entityHasGuid } from '@eventespresso/predicates';

import { useTicketQueryOptions, useDefaultTicketsQueryOptions } from '../../queries';
import type { CacheUpdaterFn, CacheUpdaterFnArgs } from '../types';
import { Ticket, TicketsList } from '../../';

const useUpdateTicketCache = (): CacheUpdaterFn => {
	const queryOptions = useTicketQueryOptions();
	const defaultTicketsQueryOptions = useDefaultTicketsQueryOptions();

	const updateTicketCache = useCallback(
		({ cache, tickets, ticket, action }: CacheUpdaterFnArgs): void => {
			const { nodes = [] } = tickets;
			let newNodes: Array<Ticket> = [],
				ticketIndex: number;
			switch (action) {
				case 'add':
					newNodes = [...nodes, ticket];
					break;
				case 'update':
					// find the index of the ticket to update
					ticketIndex = findIndex(entityHasGuid(ticket.id), nodes);
					// if ticket exists
					if (ticketIndex >= 0) {
						newNodes = update(ticketIndex, ticket, nodes);
					}
					break;
				case 'remove':
					newNodes = nodes.filter(({ id }) => id !== ticket.id);
					break;
				default:
					newNodes = nodes;
					break;
			}

			const options = ticket.isDefault ? defaultTicketsQueryOptions : queryOptions;

			// write the data to cache without
			// mutating the cache directly
			const writeOptions: WriteQueryOptions = {
				...options,
				data: {
					espressoTickets: {
						...tickets,
						nodes: newNodes,
					},
				},
			};
			cache.writeQuery<TicketsList>(writeOptions);
		},
		[defaultTicketsQueryOptions, queryOptions]
	);

	return updateTicketCache;
};

export default useUpdateTicketCache;
