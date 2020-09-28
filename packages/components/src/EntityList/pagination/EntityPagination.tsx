import React from 'react';

import { Pagination } from '@eventespresso/adapters';
import type { PaginationProps } from '@eventespresso/adapters';
import type { EntityListFilterStateManager } from '../filterBar';
import './style.scss';

interface EntityPaginationProps<ELFS extends EntityListFilterStateManager> extends Partial<PaginationProps> {
	filterState: ELFS;
}

/**
 * Adds pagination to an "EntityList" component
 * @return EntityPagination
 */
const EntityPagination: React.FC<EntityPaginationProps<any>> = ({
	filterState,
	showPerPageChanger = true,
	showTotal,
	...props
}) => {
	const { pageNumber, perPage, setPerPage, setPageNumber, total }: EntityListFilterStateManager = filterState;

	return (
		<div className='ee-entity-pagination'>
			<Pagination
				{...props}
				defaultPerPage={6}
				onChangePageNumber={setPageNumber}
				onChangePerPage={setPerPage}
				pageNumber={pageNumber}
				perPage={perPage}
				showPerPageChanger={showPerPageChanger}
				showTotal={showTotal}
				total={total}
			/>
		</div>
	);
};

export default EntityPagination;
