import React from 'react';
import RcPagination from 'rc-pagination';

import 'rc-pagination/assets/index.css';

import { __ } from '@eventespresso/i18n';
import { ChevronLeft, ChevronRight } from '@eventespresso/icons';
import type { PaginationProps } from './types';

export const Pagination: React.FC<PaginationProps> = ({
	current,
	defaultCurrent = 1,
	hideOnSinglePage = true,
	itemRender,
	locale,
	onChange,
	pageSize,
	perPageChanger,
	total,
}) => {
	return (
		<>
			<RcPagination
				aria-label={__('pagination')}
				current={current}
				defaultCurrent={defaultCurrent}
				hideOnSinglePage={hideOnSinglePage}
				itemRender={itemRender}
				locale={locale}
				nextIcon={<ChevronRight size='small' />}
				onChange={onChange}
				pageSize={pageSize}
				prevIcon={<ChevronLeft size='small' />}
				showSizeChanger={false}
				total={total}
			/>
			{perPageChanger}
		</>
	);
};
