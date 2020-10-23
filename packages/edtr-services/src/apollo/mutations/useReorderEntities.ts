import { useCallback, useEffect, useState, useMemo } from 'react';
import { useMutation } from '@eventespresso/data';
import gql from 'graphql-tag';
import { clone } from 'ramda';
import { useDebouncedCallback } from 'use-debounce';
import type { MutationResult } from '@apollo/client';

import type { EntityId } from '@eventespresso/data';
import { getGuids } from '@eventespresso/predicates';
import type { Datetime, Ticket } from '../types';

type Entity = Datetime | Ticket;

interface ReorderEntitiesProps {
	entityType: 'DATETIME' | 'TICKET';
}

interface CallbackArgs<E extends Entity> {
	allEntities: Array<E>;
	filteredEntityIds: Array<EntityId>;
	newIndex: number;
	oldIndex: number;
	updateEntityList: (updatedEntities: Array<E>) => void;
}

type SortCallback<E extends Entity> = (args: CallbackArgs<E>) => void;

const REORDER_ENTITIES = gql`
	mutation REORDER_ENTITIES($input: ReorderEspressoEntitiesInput!) {
		reorderEspressoEntities(input: $input) {
			ok
		}
	}
`;

interface ReorderEntities<E extends Entity> {
	cancel: VoidFunction;
	done: VoidFunction;
	result: MutationResult;
	sortEntities: SortCallback<E>;
}

const useReorderEntities = <E extends Entity>({ entityType }: ReorderEntitiesProps): ReorderEntities<E> => {
	const [allEntityGuids, setAllEntityGuids] = useState<Array<EntityId>>([]);
	const allEntityGuidsStr = allEntityGuids.join(':');

	const [mutate, result] = useMutation(REORDER_ENTITIES);

	const { callback: runMutation, cancel: cancelDebounce } = useDebouncedCallback(mutate, 5000); // delay in MS

	const done = useCallback(() => {
		runMutation({
			variables: {
				input: {
					clientMutationId: 'REORDER_ENTITIES',
					entityIds: allEntityGuids,
					entityType,
				},
			},
		});
	}, [allEntityGuids, entityType, runMutation]);

	useEffect(() => {
		if (allEntityGuids.length) {
			done();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allEntityGuidsStr]);

	const cancel = useCallback(() => {
		cancelDebounce();
	}, [cancelDebounce]);

	const sortEntities = useCallback<SortCallback<E>>(
		({ allEntities: allEntitiesList, filteredEntityIds, newIndex, oldIndex, updateEntityList }) => {
			if (newIndex === oldIndex || newIndex < 0 || oldIndex < 0) {
				return;
			}
			// cancel existing debounce
			cancel();

			const entityIds = clone(filteredEntityIds);
			let allEntities = clone(allEntitiesList);

			// remove entity from existing location in filtered list
			const [removed] = entityIds.splice(oldIndex, 1);
			// insert removed entity into new location in same list
			entityIds.splice(newIndex, 0, removed);
			// now loop thru entities in filtered list
			const entities = entityIds.map((entityId, index) => {
				// grab index of reordered entities in list of all entities
				const indexInAll = allEntities.findIndex((item) => item.id === entityId);
				// remove reordered entities from list of all entities
				const [entity] = allEntities.splice(indexInAll, 1);

				// reset the order property for all entities in filtered list
				return { ...entity, order: index + 1 };
			});

			// insert ordered entities at the beginning of the array
			// which means trashed ones will land up at the end
			allEntities = [...entities, ...allEntities];
			// but now we need to reset the order properties for ALL entities
			allEntities.map((entity, index) => {
				// add 1 so we don't end up with order: 0
				entity.order = index + 1;
				return entity;
			});

			updateEntityList(allEntities);

			setAllEntityGuids(getGuids(allEntities));
		},
		[cancel]
	);

	return useMemo(() => ({ cancel, done, result, sortEntities }), [cancel, done, result, sortEntities]);
};

export default useReorderEntities;
