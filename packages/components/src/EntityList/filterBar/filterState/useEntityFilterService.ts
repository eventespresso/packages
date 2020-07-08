import { useCallback, useMemo } from 'react';
import { Entity } from '@eventespresso/data';
import type { EntityFilterService, EntityListFilterStateManager } from './types';
import { useFilterBarService, FilterBarServiceCbArgs } from '@eventespresso/registry';
import { SubscriptionCallback } from '@eventespresso/registry';
import { sortBy, pathOr } from 'ramda';

type ELFSM = EntityListFilterStateManager;

const useEntityFilterService = <D extends string, L extends string, E extends Entity, FS extends ELFSM>(
	domain: D,
	listId: L
): EntityFilterService<E, FS> => {
	type EFS = EntityFilterService<E, FS>;

	const { getFilters, getSearches, getSorters } = useFilterBarService<D, L, E, ELFSM>(domain, listId);

	const getCallbackList = useCallback(
		(
			mappedCallbackList: ReturnType<typeof getFilters>
		): Array<SubscriptionCallback<FilterBarServiceCbArgs<E, ELFSM>, E[]>> => {
			const subscriptions = sortBy(pathOr(10, ['options', 'priority']), Object.values(mappedCallbackList));
			return subscriptions.map(({ callback }) => callback);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const applyCallbacks = useCallback(
		(entityList: Array<E>, filterState: FS, mappedCallbackList: ReturnType<typeof getFilters>): Array<E> => {
			let filteredEntities = entityList;

			const callbacks = getCallbackList(mappedCallbackList);

			callbacks.forEach((callback) => {
				filteredEntities = callback({ entityList: filteredEntities, filterState });
			});

			return filteredEntities;
		},
		[getCallbackList, getFilters]
	);

	// avoid the callback being affected by change in other callbacks
	const filterIdsStr = Object.keys(getFilters()).join(':');
	const applyFilters = useCallback<EFS['applyFilters']>(
		(entityList, filterState) => {
			return applyCallbacks(entityList, filterState, getFilters());
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[applyCallbacks, filterIdsStr]
	);

	// avoid the callback being affected by change in other callbacks
	const searchIdsStr = Object.keys(getSearches()).join(':');
	const applySearches = useCallback<EFS['applySearches']>(
		(entityList, filterState) => {
			return applyCallbacks(entityList, filterState, getSearches());
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[applyCallbacks, searchIdsStr]
	);

	// avoid the callback being affected by change in other callbacks
	const sorterIdsStr = Object.keys(getSorters()).join(':');
	const applySorters = useCallback<EFS['applySorters']>(
		(entityList, filterState) => {
			return applyCallbacks(entityList, filterState, getSorters());
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[applyCallbacks, sorterIdsStr]
	);

	return useMemo(
		() => ({
			applyFilters,
			applySearches,
			applySorters,
		}),
		[applyFilters, applySearches, applySorters]
	);
};

export default useEntityFilterService;
