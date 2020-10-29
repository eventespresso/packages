import type React from 'react';
import { PaginationProps as RcPaginationProps } from 'rc-pagination';

export interface PaginationProps
	extends Pick<RcPaginationProps, 'defaultCurrent' | 'itemRender' | 'onChange' | 'total'> {
	pageNumber: number;
	perPage: number;
	defaultPageNumber?: number;
	hideOnSinglePage?: boolean;
	locale?: Locale;
	perPageChanger: React.ReactNode;
	showTotal?: (total: number, range: [number, number]) => React.ReactNode;
}

export interface Locale {
	next_page: string;
	prev_page: string;
}
