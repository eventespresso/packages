import { useCallback } from 'react';

import { getGuids } from '@eventespresso/predicates';
import { MutationType } from '@eventespresso/data';

import useMutationVariables from './useMutationVariables';
import useOnCreateTicket from './useOnCreateTicket';
import useOnDeleteTicket from './useOnDeleteTicket';
import useOnUpdateTicket from './useOnUpdateTicket';
import useOptimisticResponse from './useOptimisticResponse';
import { DEFAULT_TICKET_LIST_DATA as DEFAULT_LIST_DATA, useTicketQueryOptions } from '../../queries';
import type { MutationHandler, MutationUpdater } from '../types';
import { TicketsList, Ticket } from '../../';
import type { TicketCommonInput } from './types';

type MH = MutationHandler<Ticket, TicketCommonInput>;

const useMutationHandler = (): MH => {
	const options = useTicketQueryOptions();

	const onCreateTicket = useOnCreateTicket();
	const onUpdateTicket = useOnUpdateTicket();
	const onDeleteTicket = useOnDeleteTicket();

	const getMutationVariables = useMutationVariables();
	const getOptimisticResponse = useOptimisticResponse();

	const onUpdate = useCallback<MutationUpdater<Ticket, TicketCommonInput>>(
		({ cache, entity, input, mutationType }) => {
			// extract prices data to avoid
			// it going to tickets cache
			const { prices, ...ticket } = entity;

			// Read the existing data from cache.
			let data: TicketsList;
			try {
				data = cache.readQuery(options);
			} catch (error) {
				data = null;
			}
			const tickets = data?.espressoTickets || DEFAULT_LIST_DATA;
			const datetimeIds = input?.datetimes;

			const priceIds: string[] = prices?.nodes ? getGuids(prices.nodes) : null;

			switch (mutationType) {
				case MutationType.Create:
					onCreateTicket({ cache, tickets, ticket, datetimeIds, prices });
					break;
				case MutationType.Update:
					onUpdateTicket({ cache, tickets, ticket, datetimeIds, priceIds });
					break;
				case MutationType.Delete:
					onDeleteTicket({ cache, tickets, ticket, deletePermanently: input?.deletePermanently });
					break;
			}
		},
		[onCreateTicket, onDeleteTicket, onUpdateTicket, options]
	);
	const mutator = useCallback<MH>(
		(mutationType, input) => {
			const variables = getMutationVariables(mutationType, input);
			const optimisticResponse = getOptimisticResponse(mutationType, input);

			return { variables, optimisticResponse, onUpdate };
		},
		[getMutationVariables, getOptimisticResponse, onUpdate]
	);

	return mutator;
};

export default useMutationHandler;
