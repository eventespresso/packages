import type React from 'react';

export interface PaginationProps extends PerPageProps {
	defaultPageNumber?: number;
	hideOnSinglePage?: boolean;
	locale?: Locale;
	onChangePageNumber: (pageNumber: number, perPage: number) => void;
	showPerPageChanger: boolean;
	showTotal?: (total: number, range: [number, number]) => React.ReactNode;
}

export type PerPageOptions = {
	[key: number]: string; // per page value (number) and translated label (string)
};

export interface PerPageProps {
	className?: string;
	defaultPerPage: number;
	onChangePerPage: (newPageNumber: number, newPerPage: number) => void;
	pageNumber: number;
	perPage: number;
	perPageOptions?: PerPageOptions;
	total: number;
}

export interface Locale {
	items_per_page?: string;
}
