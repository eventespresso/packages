import { useCallback, useMemo } from 'react';

import type { EntityId } from '@eventespresso/data';
import type { EntityTableProps } from '@eventespresso/components';

import type { Ticket, TicketEdge } from '../../types';
import useReorderEntities from '../useReorderEntities';
import { TicketsFilterStateManager as DFSM } from '../../../filterState';
import { useTickets, useTicketQueryOptions } from '../../queries';
import { useUpdateTicketList } from '../../../hooks';

type SortResponder = EntityTableProps<DFSM>['onSort'];

interface ReorderTickets {
	sortResponder: SortResponder;
}

const useReorderTickets = (filteredEntityIds: Array<EntityId>): ReorderTickets => {
	const { sortEntities } = useReorderEntities<Ticket>({ entityType: 'TICKET' });
	const allEntities = useTickets();
	const queryOptions = useTicketQueryOptions();
	const updateTicketList = useUpdateTicketList();

	const updateEntityList = useCallback(
		(updatedEntities) => {
			const espressoTickets: TicketEdge = {
				nodes: updatedEntities,
				__typename: 'EspressoRootQueryTicketsConnection',
			};
			updateTicketList({
				...queryOptions,
				data: {
					espressoTickets,
				},
			});
		},
		[queryOptions, updateTicketList]
	);

	const sortResponder = useCallback<SortResponder>(
		({ destination, source }) => {
			const noDestination = !destination;
			const noChange = source?.index === destination?.index && destination?.droppableId === source?.droppableId;
			const notOurListOfInterest = destination?.droppableId !== 'ticket-entities-table-view-droppable';

			if (noDestination || noChange || notOurListOfInterest) {
				return;
			}
			sortEntities({
				allEntities,
				filteredEntityIds,
				newIndex: destination.index,
				oldIndex: source.index,
				updateEntityList,
			});
		},
		[filteredEntityIds, allEntities, sortEntities, updateEntityList]
	);

	return useMemo(() => ({ sortResponder }), [sortResponder]);
};

export default useReorderTickets;
