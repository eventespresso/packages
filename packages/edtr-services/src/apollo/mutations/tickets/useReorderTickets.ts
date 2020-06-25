import { useCallback, useMemo } from 'react';

import type { Ticket, TicketEdge } from '../../types';
import useReorderEntities from '../useReorderEntities';
import type { EntityTableProps } from '@eventespresso/components';
import { TicketsFilterStateManager as DFSM } from '../../../filterState';
import { useTickets, useTicketQueryOptions } from '../../queries';
import { useUpdateTicketList } from '../../../hooks';

type SortResponder = EntityTableProps<Ticket, DFSM>['onSort'];

interface ReorderTickets {
	sortResponder: SortResponder;
}

const useReorderTickets = (filteredEntities: Array<Ticket>): ReorderTickets => {
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
				filteredEntities,
				newIndex: destination.index,
				oldIndex: source.index,
				updateEntityList,
			});
		},
		[filteredEntities, allEntities, sortEntities, updateEntityList]
	);

	return useMemo(() => ({ sortResponder }), [sortResponder]);
};

export default useReorderTickets;
