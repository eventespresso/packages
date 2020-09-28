import { useCallback, useMemo, useReducer } from 'react';

import usePaginationReducer from './usePaginationReducer';
import type { Pagination, PaginationState } from './types';

export const usePagination = (datesLength: number | null): Pagination => {
	const initialState = useMemo<PaginationState>(
		() => ({
			pageNumber: 1,
			perPage: 6,
			total: datesLength,
		}),
		[datesLength]
	);

	const [{ pageNumber, perPage, total }, dispatch] = useReducer(usePaginationReducer(), initialState);

	const setPageNumber: Pagination['setPageNumber'] = useCallback((pageNumber) => {
		dispatch({
			type: 'SET_PAGE_NUMBER',
			pageNumber,
		});
	}, []);

	const setPerPage: Pagination['setPerPage'] = useCallback(
		(newPageNumber, newPerPage) => {
			if (newPageNumber && newPageNumber !== pageNumber) {
				setPageNumber(newPageNumber);
			}

			dispatch({
				type: 'SET_PER_PAGE',
				perPage: newPerPage,
			});
		},
		[pageNumber, setPageNumber]
	);

	const setTotal: Pagination['setTotal'] = useCallback((total) => {
		dispatch({
			type: 'SET_TOTAL',
			total,
		});
	}, []);

	return useMemo(
		() => ({
			pageNumber,
			perPage,
			total,
			setPerPage,
			setPageNumber,
			setTotal,
		}),
		[pageNumber, perPage, setPageNumber, setPerPage, setTotal, total]
	);
};
