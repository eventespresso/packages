import { useEffect, useMemo } from 'react';

import { Entity } from '@eventespresso/data';
import { EntityListFilterStateManager } from './types';
import useEntityFilterService from './useEntityFilterService';
import { entityListCacheIdString } from '@eventespresso/services';

type ELFSM = EntityListFilterStateManager<any>;

const useFilteredEntities = <D extends string, L extends string, E extends Entity, FS extends ELFSM>(
	domain: D,
	listId: L,
	entityList: Array<E>,
	filterState: FS
): Array<E> => {
	const { pageNumber, perPage, searchText, setPageNumber, setTotal, sortBy, sortingEnabled, total } = filterState;

	const { applyFilters, applySearches, applySorters } = useEntityFilterService<D, L, E, ELFSM>(domain, listId);

	let cacheIds: string;
	// Filter the list
	cacheIds = entityListCacheIdString(entityList);
	const filteredEntities = useMemo<Array<E>>(() => {
		if (sortingEnabled) {
			return entityList;
		}
		return applyFilters(entityList, filterState);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [applyFilters, cacheIds, filterState]);

	// search entities
	cacheIds = entityListCacheIdString(filteredEntities);
	const searchResults = useMemo<Array<E>>(() => {
		if (sortingEnabled) {
			return filteredEntities;
		}
		return applySearches(filteredEntities, filterState);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [applySearches, cacheIds, searchText]);

	// sort it
	cacheIds = entityListCacheIdString(searchResults);
	const sortedEntities = useMemo<Array<E>>(() => {
		return applySorters(searchResults, filterState);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [applySorters, cacheIds, sortBy]);

	// paginate it
	cacheIds = entityListCacheIdString(sortedEntities);
	const paginatedEntities = useMemo<Array<E>>(() => {
		if (sortingEnabled) {
			return sortedEntities;
		}
		// entities for current page
		return sortedEntities.slice(perPage * (pageNumber - 1), perPage * pageNumber);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cacheIds, perPage, pageNumber, sortingEnabled]);

	// Avoid synchronous state update
	useEffect(() => {
		if (total !== searchResults.length) {
			setTotal(searchResults.length);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [total, searchResults]);

	useEffect(() => {
		// If there are no paginated entities and current pageNumber is not 1
		//e.g. When there is only one entity on the last page and it's deleted
		if (paginatedEntities.length === 0 && pageNumber > 1) {
			setPageNumber(1);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [paginatedEntities.length]);

	return paginatedEntities;
};

export default useFilteredEntities;
