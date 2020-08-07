import { useCallback } from 'react';

import type { EntityId } from '@eventespresso/data';
import type { DatetimeEdge } from '../../types';
import { useDatetimes, useDatetimeQueryOptions } from '../../queries';
import { useUpdateDatetimeList } from '../../../hooks';
import useBulkDeleteEntities from '../useBulkDeleteEntities';
import { TypeName, cacheNodesFromBulkDelete } from '../';

type Callback<R = void> = (entityIds: Array<EntityId>, deletePermanently?: boolean) => R;

const useBulkDeleteDatetimes = (): Callback => {
	const allDatetimes = useDatetimes();
	const queryOptions = useDatetimeQueryOptions();
	const updateDatetimeList = useUpdateDatetimeList();

	const bulkDelete = useBulkDeleteEntities({ entityType: 'DATETIME', typeName: TypeName.Datetime });

	const updateEntityList = useCallback<Callback<VoidFunction>>(
		(entityIds, deletePermanently) => () => {
			const nodes = cacheNodesFromBulkDelete(entityIds, allDatetimes, deletePermanently);

			const espressoDatetimes: DatetimeEdge = {
				nodes,
				__typename: 'EspressoRootQueryDatetimesConnection',
			};
			updateDatetimeList({
				...queryOptions,
				data: {
					espressoDatetimes,
				},
			});
		},
		[allDatetimes, queryOptions, updateDatetimeList]
	);

	return useCallback(
		(entityIds, deletePermanently) => {
			bulkDelete({
				entityIds,
				deletePermanently,
				updateEntityList: updateEntityList(entityIds, deletePermanently),
			});
		},
		[bulkDelete, updateEntityList]
	);
};

export default useBulkDeleteDatetimes;
