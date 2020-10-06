import { useCallback } from 'react';
import { findIndex, update } from 'ramda';

import type { CacheUpdaterFn, CacheUpdaterFnArgs } from '../types';
import { Recurrence, RecurrencesList } from '../../types';
import { WriteQueryOptions } from '@eventespresso/data';
import { entityHasGuid } from '@eventespresso/predicates';
import { useRecurrenceQueryOptions } from '../../queries';

const useUpdateRecurrenceCache = (): CacheUpdaterFn => {
	const queryOptions = useRecurrenceQueryOptions();

	const updateRecurrenceCache = useCallback(
		({ cache, recurrences, recurrence, action }: CacheUpdaterFnArgs): void => {
			const { nodes = [] } = recurrences;
			let newNodes: Array<Recurrence> = [],
				recurrenceIndex: number;
			switch (action) {
				case 'add':
					newNodes = [...nodes, recurrence];
					break;
				case 'update':
					// find the index of the recurrence to update
					recurrenceIndex = findIndex(entityHasGuid(recurrence.id), nodes);
					// if recurrence exists
					if (recurrenceIndex >= 0) {
						newNodes = update(recurrenceIndex, recurrence, nodes);
					}
					break;
				case 'remove':
					newNodes = nodes.filter(({ id }) => id !== recurrence.id);
					break;
				default:
					newNodes = nodes;
					break;
			}

			// write the data to cache without
			// mutating the cache directly
			const writeOptions: WriteQueryOptions = {
				...queryOptions,
				data: {
					espressoRecurrences: {
						...recurrences,
						nodes: newNodes,
					},
				},
			};
			cache.writeQuery<RecurrencesList>(writeOptions);
		},
		[queryOptions]
	);

	return updateRecurrenceCache;
};

export default useUpdateRecurrenceCache;
