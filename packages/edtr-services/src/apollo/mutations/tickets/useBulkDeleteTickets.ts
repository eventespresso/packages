import { useCallback } from 'react';
import type { ExecutionResult } from 'graphql';

import type { EntityId } from '@eventespresso/data';
import type { TicketEdge } from '../../types';
import { useTickets, useTicketQueryOptions } from '../../queries';
import { useUpdateTicketList } from '../../../hooks';
import useBulkDeleteEntities from '../useBulkDeleteEntities';
import { TypeName, cacheNodesFromBulkDelete } from '../';

type Callback<R = void> = (entityIds: Array<EntityId>, deletePermanently?: boolean) => R;

const useBulkDeleteTickets = (): Callback<Promise<ExecutionResult>> => {
	const allTickets = useTickets();
	const queryOptions = useTicketQueryOptions();
	const updateTicketList = useUpdateTicketList();

	const bulkDelete = useBulkDeleteEntities({ entityType: 'TICKET', typeName: TypeName.Ticket });

	const updateEntityList = useCallback<Callback<VoidFunction>>(
		(entityIds, deletePermanently) => () => {
			const nodes = cacheNodesFromBulkDelete(entityIds, allTickets, deletePermanently);

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

	return useCallback(
		async (entityIds, deletePermanently) => {
			return await bulkDelete({
				entityIds,
				deletePermanently,
				updateEntityList: updateEntityList(entityIds, deletePermanently),
			});
		},
		[bulkDelete, updateEntityList]
	);
};

export default useBulkDeleteTickets;
