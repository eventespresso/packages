import { useMemo } from 'react';

import type { GeneratedDate } from '../types';
import type { PaginationState } from './types';

interface Props {
	dates: GeneratedDate[];
	paginationState: PaginationState;
}

export const usePaginatedDates = ({ dates, paginationState }: Props): GeneratedDate[] => {
	const { pageNumber, perPage } = paginationState;

	const paginatedEntities = useMemo<Array<GeneratedDate>>(() => {
		return dates.slice(perPage * (pageNumber - 1), perPage * pageNumber);
	}, [dates, perPage, pageNumber]);

	return paginatedEntities;
};
