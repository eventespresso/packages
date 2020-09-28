import React from 'react';

import { Pagination as PaginationAdapter } from '@eventespresso/adapters';
import type { PaginationProps } from './types';

export const Pagination: React.FC<PaginationProps> = ({ pageNumber, perPage, setPerPage, setPageNumber, total }) => {
	const hidePagination = total <= perPage;

	return hidePagination ? null : (
		<PaginationAdapter
			defaultPerPage={6}
			onChangePageNumber={setPageNumber}
			onChangePerPage={setPerPage}
			pageNumber={pageNumber}
			perPage={perPage}
			showPerPageChanger={true}
			total={total}
		/>
	);
};
