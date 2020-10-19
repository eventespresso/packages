import React from 'react';
import RcPagination from 'rc-pagination';

import 'rc-pagination/assets/index.css';

import { sprintf, __ } from '@eventespresso/i18n';
import { ChevronLeft, ChevronRight } from '@eventespresso/icons';

import ItemRender from './ItemRender';
import type { PaginationProps, PerPageOptions } from './types';
import PerPage from './PerPage';

import './style.scss';

const DEFAULT_PER_PAGE_OPTIONS: PerPageOptions = {
	2: sprintf(/* translators: %s is per page value */ __('%s / page'), __('2')),
	6: sprintf(/* translators: %s is per page value */ __('%s / page'), __('6')),
	12: sprintf(/* translators: %s is per page value */ __('%s / page'), __('12')),
	24: sprintf(/* translators: %s is per page value */ __('%s / page'), __('24')),
	48: sprintf(/* translators: %s is per page value */ __('%s / page'), __('48')),
};

const Pagination: React.FC<PaginationProps> = ({
	defaultPageNumber = 1,
	defaultPerPage,
	hideOnSinglePage = true,
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
