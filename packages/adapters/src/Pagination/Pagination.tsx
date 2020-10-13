import React from 'react';
import RcPagination from 'rc-pagination';

import 'rc-pagination/assets/index.css';
import defaultLocale from 'rc-pagination/lib/locale/en_US';

import { __ } from '@eventespresso/i18n';
import { ChevronLeft, ChevronRight } from '@eventespresso/icons';

import ItemRender from './ItemRender';
import type { PaginationProps } from './types';
import PerPage from './PerPage';

import './style.scss';

const DEFAULT_PER_PAGE_OPTIONS = ['2', '6', '12', '24', '48'];

const Pagination: React.FC<PaginationProps> = ({
	defaultPageNumber = 1,
	defaultPerPage,
	hideOnSinglePage = true,
	locale = defaultLocale,
	onChangePageNumber,
	onChangePerPage,
	pageNumber,
	perPage,
	perPageOptions = DEFAULT_PER_PAGE_OPTIONS,
	showPerPageChanger,
	total,
	...props
}) => {
	const hidePagination = total <= perPage;

	return hidePagination ? null : (
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
					locale={locale}
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
