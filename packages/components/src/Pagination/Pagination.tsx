import React from 'react';

import { Pagination as PaginationAdapter } from '@eventespresso/adapters';
import { DEFAULT_LOCALE, DEFAULT_PER_PAGE_OPTIONS } from './constants';
import ItemRender from './ItemRender';
import PerPage from './PerPage';
import type { PaginationProps } from './types';

import './style.scss';

export const Pagination: React.FC<PaginationProps> = ({
	defaultPageNumber = 1,
	defaultPerPage,
	hideOnSinglePage = true,
	locale = DEFAULT_LOCALE,
	onChangePageNumber,
	onChangePerPage,
	pageNumber,
	perPage,
	perPageOptions = DEFAULT_PER_PAGE_OPTIONS,
	showPerPageChanger,
	total,
}) => {
	const perPageChanger = showPerPageChanger && (
		<PerPage
			defaultPerPage={defaultPerPage}
			onChangePerPage={onChangePerPage}
			pageNumber={pageNumber}
			perPage={perPage}
			perPageOptions={perPageOptions}
			total={total}
		/>
	);

	return (
		<div className='ee-pagination'>
			<PaginationAdapter
				current={pageNumber}
				defaultCurrent={defaultPageNumber}
				hideOnSinglePage={hideOnSinglePage}
				itemRender={ItemRender}
				locale={locale}
				onChange={onChangePageNumber}
				pageSize={perPage}
				perPageChanger={perPageChanger}
				total={total}
			/>
		</div>
	);
};
