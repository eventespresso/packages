import { useCallback, useMemo } from 'react';

import { useMutationWithFeedback, MutationType } from '@eventespresso/data';
import { useSystemNotifications } from '@eventespresso/toaster';
import type { TicketEdge } from '../../types';
import { useTicketQueryOptions, useTickets } from '../../queries';
import { useUpdateTicketList } from '../../../hooks';
import { BulkUpdateTicketInput, BULK_UPDATE_TICKETS } from './';
import { TypeName } from '../';
import { cacheNodesFromBulkInput } from '../utils';

interface BulkEditTickets {
	updateEntities: (input: BulkUpdateTicketInput) => ReturnType<ReturnType<typeof useMutationWithFeedback>>;
}

const useBulkEditTickets = (): BulkEditTickets => {
	const allTickets = useTickets();
	const queryOptions = useTicketQueryOptions();
	const toaster = useSystemNotifications();
	const updateTicketList = useUpdateTicketList();

	const updateTickets = useMutationWithFeedback({
		typeName: TypeName.Ticket,
		mutationType: MutationType.Update,
		mutation: BULK_UPDATE_TICKETS,
		toaster,
	});

	const updateEntityList = useCallback(
		(input: BulkUpdateTicketInput) => () => {
			const nodes = cacheNodesFromBulkInput(input, allTickets);

			const espressoTickets: TicketEdge = {
				nodes,
				__typename: 'EspressoRootQueryTicketsConnection',
			};
			updateTicketList({
				...queryOptions,
				data: {
					espressoTickets,
				},
			});
		},
		[allTickets, queryOptions, updateTicketList]
	);

	const updateEntities = useCallback<BulkEditTickets['updateEntities']>(
		(input) => {
			const variables = {
				input: {
					clientMutationId: 'BULK_UPDATE_TICKETS',
					...input,
				},
			};
			return updateTickets({ variables, update: updateEntityList(input) });
		},
		[updateTickets, updateEntityList]
	);

	return useMemo(() => ({ updateEntities }), [updateEntities]);
};

export default useBulkEditTickets;
