import { useCallback, useMemo } from 'react';

import type { EntityId } from '@eventespresso/data';
import type { EntityTableProps } from '@eventespresso/components';

import type { Datetime, DatetimeEdge } from '../../types';
import useReorderEntities from '../useReorderEntities';
import { useDatetimes, useDatetimeQueryOptions } from '../../queries';
import { useUpdateDatetimeList } from '../../../hooks';
import { DatetimesFilterStateManager as DFSM } from '../../../filterState';

type SortResponder = EntityTableProps<DFSM>['onSort'];

interface ReorderDatetimes {
	sortResponder: SortResponder;
}

const useReorderDatetimes = (filteredEntityIds: Array<EntityId>): ReorderDatetimes => {
	const { sortEntities } = useReorderEntities<Datetime>({ entityType: 'DATETIME' });
	const allEntities = useDatetimes();
	const queryOptions = useDatetimeQueryOptions();
	const updateDatetimeList = useUpdateDatetimeList();

	const updateEntityList = useCallback(
		(updatedEntities) => {
			const espressoDatetimes: DatetimeEdge = {
				nodes: updatedEntities,
				__typename: 'EspressoRootQueryDatetimesConnection',
			};
			updateDatetimeList({
				...queryOptions,
				data: {
					espressoDatetimes,
				},
			});
		},
		[queryOptions, updateDatetimeList]
	);

	const sortResponder = useCallback<SortResponder>(
		({ destination, source }) => {
			const noDestination = !destination;
			const noChange = source?.index === destination?.index && destination?.droppableId === source?.droppableId;
			const notOurListOfInterest = destination?.droppableId !== 'date-entities-table-view-droppable';

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

export default useReorderDatetimes;
