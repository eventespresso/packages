import { useCallback } from 'react';

import type { PaginationReducer, PaginationState } from './types';

const usePaginationReducer = (): PaginationReducer => {
	return useCallback<PaginationReducer>((state, action): PaginationState => {
		const { type, perPage, pageNumber, total } = action;

		switch (type) {
			case 'SET_PER_PAGE':
				return { ...state, perPage };

			case 'SET_PAGE_NUMBER':
				return { ...state, pageNumber };

			case 'SET_TOTAL':
				return { ...state, total };

			default:
				throw new Error('Unexpected action');
		}
	}, []);
};

export default usePaginationReducer;
