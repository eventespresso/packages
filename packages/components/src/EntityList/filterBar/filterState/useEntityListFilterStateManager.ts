import { useCallback, useEffect, useMemo, useReducer } from 'react';

import { useSessionStorageState } from '@eventespresso/storage';
import type { BasicSortBy, EntityListFilterState, EntityListFilterStateManager } from './types';
import useStateReducer from './useStateReducer';

// create a shorter generic to use at multiple places.
type ELFSM<SortBy = BasicSortBy> = EntityListFilterStateManager<SortBy>;

const useEntityListFilterStateManager = <SortBy = BasicSortBy>(defaultSortBy: SortBy, listId = ''): ELFSM<SortBy> => {
	type FSM = ELFSM<SortBy>;

	const [view, setView] = useSessionStorageState<FSM['view']>(`${listId}-view`, 'card');

	const initialState = useMemo<EntityListFilterState<SortBy>>(
		() => ({
			perPage: 6,
			pageNumber: 1,
			total: null,
			searchText: '',
			sortBy: defaultSortBy,
			sortingEnabled: false,
			view,
		}),
		[defaultSortBy, view]
	);
	const [state, dispatch] = useReducer(useStateReducer<SortBy>(), initialState);

	useEffect(() => {
		setView(state.view);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.view]);

	const getState: FSM['getState'] = useCallback(() => state, [state]);

	const setSortBy: FSM['setSortBy'] = useCallback((sortBy) => {
		dispatch({
			type: 'SET_SORT_BY',
			sortBy,
		});
	}, []);

	const setPerPage: FSM['setPerPage'] = useCallback(
		(newPageNumber, newPerPage) => {
			// the pagination component will recalculate the page number
			// if it goes out of range after changing the perPage value,
			// so save that else we'll get no results returned
			if (newPageNumber && newPageNumber !== state.pageNumber) {
				setPageNumber(newPageNumber);
			}
			dispatch({
				type: 'SET_PER_PAGE',
				perPage: newPerPage,
			});
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[state.pageNumber]
	);

	const setPageNumber: FSM['setPageNumber'] = useCallback((pageNumber) => {
		dispatch({
			type: 'SET_PAGE_NUMBER',
			pageNumber,
		});
	}, []);

	const setTotal: FSM['setTotal'] = useCallback((total) => {
		dispatch({
			type: 'SET_TOTAL',
			total,
		});
	}, []);

	const setCardView: FSM['setCardView'] = useCallback(() => {
		dispatch({
			type: 'SET_VIEW',
			view: 'card',
		});
	}, []);

	const setTableView: FSM['setTableView'] = useCallback(() => {
		dispatch({
			type: 'SET_VIEW',
			view: 'table',
		});
	}, []);

	const setSearchText: FSM['setSearchText'] = useCallback((searchText) => {
		dispatch({
			searchText,
			type: 'SET_SEARCH_TEXT',
		});
	}, []);

	const toggleSorting: FSM['toggleSorting'] = useCallback(() => {
		dispatch({
			type: 'TOGGLE_SORTING',
		});
	}, []);

	return useMemo(
		() => ({
			...state,
			getState,
			setSortBy,
			setPerPage,
			setPageNumber,
			setTotal,
			setCardView,
			setTableView,
			setSearchText,
			toggleSorting,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[state]
	);
};

export default useEntityListFilterStateManager;
