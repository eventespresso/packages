import { useCallback, useMemo, useState } from 'react';

import type { EntityId } from '@eventespresso/data';
import type { EntityTableProps } from '@eventespresso/ee-components';

import { ReorderEntities, useReorderEntities } from '../useReorderEntities';
import { TicketsFilterStateManager as DFSM } from '../../../filterState';
import { useTickets, useLazyTicket } from '../../queries';
import type { Ticket } from '../../types';

type SortResponder = EntityTableProps<DFSM>['onSort'];

interface ReorderTickets extends Pick<ReorderEntities<Ticket>, 'done'> {
	allOrderedEntities: Ticket[];
	sortResponder: SortResponder;
}

const useReorderTickets = (filteredEntityIds: Array<EntityId>): ReorderTickets => {
	const getTicket = useLazyTicket();
	const tickets = useMemo(() => filteredEntityIds.map(getTicket), [filteredEntityIds, getTicket]);
	const [allOrderedEntities, setAllOrderedEntities] = useState<Array<Ticket>>(tickets);

	const { sortEntities, done } = useReorderEntities<Ticket>({ entityType: 'TICKET' });
	const allEntities = useTickets();

	const sortResponder = useCallback<SortResponder>(
		({ destination, source }) => {
			const noDestination = !destination;
			const noChange = source?.index === destination?.index && destination?.droppableId === source?.droppableId;
			const notOurListOfInterest = destination?.droppableId !== 'ticket-entities-table-view-droppable';

			if (noDestination || noChange || notOurListOfInterest) {
				return;
			}

			const allSortedEntities = sortEntities({
				allEntities,
				filteredEntityIds,
				newIndex: destination.index,
				oldIndex: source.index,
			});

			setAllOrderedEntities(allSortedEntities);
		},
		[filteredEntityIds, allEntities, sortEntities]
	);

	return useMemo(() => ({ allOrderedEntities, done, sortResponder }), [allOrderedEntities, done, sortResponder]);
};

export default useReorderTickets;
