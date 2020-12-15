import { useCallback } from 'react';

import type { PaginationReducer } from './types';

const usePaginationReducer = (): PaginationReducer => {
	return useCallback<PaginationReducer>((state, action) => {
		const { type, perPage, pageNumber } = action;

		switch (type) {
			case 'SET_PER_PAGE':
				return { ...state, perPage };

			case 'SET_PAGE_NUMBER':
				return { ...state, pageNumber };

			default:
				throw new Error('Unexpected action');
		}
	}, []);
};

export default usePaginationReducer;
