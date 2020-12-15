import { useCallback, useMemo, useReducer } from 'react';

import usePaginationReducer from './usePaginationReducer';
import type { Pagination, PaginationState } from './types';

const initialState: PaginationState = {
	pageNumber: 1,
	perPage: 6,
};

export const usePagination = (): Pagination => {
	const [{ pageNumber, perPage }, dispatch] = useReducer(usePaginationReducer(), initialState);

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

	return useMemo(
		() => ({
			pageNumber,
			perPage,
			setPerPage,
			setPageNumber,
		}),
		[pageNumber, perPage, setPageNumber, setPerPage]
	);
};
