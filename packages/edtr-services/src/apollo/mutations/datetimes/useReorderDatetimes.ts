import { useCallback, useMemo, useState } from 'react';

import { datetimesDroppableId } from '@eventespresso/constants';
import type { EntityId } from '@eventespresso/data';
import type { EntityTableProps } from '@eventespresso/ee-components';

import { ReorderEntities, useReorderEntities } from '../useReorderEntities';
import { useDatetimes, useLazyDatetime } from '../../queries';
import { DatetimesFilterStateManager as DFSM } from '../../../filterState';
import type { Datetime } from '../../types';

type SortResponder = EntityTableProps<DFSM>['onSort'];

interface ReorderDatetimes extends Pick<ReorderEntities<Datetime>, 'done'> {
	allOrderedEntities: Datetime[];
	sortResponder: SortResponder;
}

const useReorderDatetimes = (filteredEntityIds: Array<EntityId>): ReorderDatetimes => {
	const getDatetime = useLazyDatetime();
	const datetimes = useMemo(() => filteredEntityIds.map(getDatetime), [filteredEntityIds, getDatetime]);
	const [allOrderedEntities, setAllOrderedEntities] = useState<Array<Datetime>>(datetimes);

	const { sortEntities, done } = useReorderEntities<Datetime>({ entityType: 'DATETIME' });
	const allEntities = useDatetimes();

	const sortResponder = useCallback<SortResponder>(
		({ destination, source }) => {
			const noDestination = !destination;
			const noChange = source?.index === destination?.index && destination?.droppableId === source?.droppableId;
			const notOurListOfInterest = destination?.droppableId !== datetimesDroppableId;

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
		[allEntities, filteredEntityIds, sortEntities]
	);

	return useMemo(() => ({ allOrderedEntities, done, sortResponder }), [allOrderedEntities, done, sortResponder]);
};

export default useReorderDatetimes;
