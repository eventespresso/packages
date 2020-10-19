import React from 'react';
import RcPagination from 'rc-pagination';

import 'rc-pagination/assets/index.css';

import { __ } from '@eventespresso/i18n';
import { ChevronLeft, ChevronRight } from '@eventespresso/icons';

import { DEFAULT_LOCALE, DEFAULT_PER_PAGE_OPTIONS } from './constants';
import type { PaginationProps } from './types';
import ItemRender from './ItemRender';
import PerPage from './PerPage';

import './style.scss';

const Pagination: React.FC<PaginationProps> = ({
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
	...props
}) => {
	return (
		<div className='ee-pagination'>
			<RcPagination
				{...props}
				aria-label={__('pagination')}
				current={pageNumber}
				defaultCurrent={defaultPageNumber}
				hideOnSinglePage={hideOnSinglePage}
				itemRender={ItemRender}
				locale={locale}
				nextIcon={<ChevronRight size='small' />}
				onChange={onChangePageNumber}
				pageSize={perPage}
				prevIcon={<ChevronLeft size='small' />}
				showSizeChanger={false}
				total={total}
			/>
			{showPerPageChanger && (
				<PerPage
					defaultPerPage={defaultPerPage}
					onChangePerPage={onChangePerPage}
					pageNumber={pageNumber}
					perPage={perPage}
					perPageOptions={perPageOptions}
					total={total}
				/>
			)}
		</div>
	);
};

export default Pagination;
