export interface PaginationState {
	perPage: number;
	pageNumber: number;
	total: number;
}

export type PaginationActionType = 'SET_PER_PAGE' | 'SET_PAGE_NUMBER' | 'SET_TOTAL';

export interface PaginationAction extends Partial<PaginationState> {
	type: PaginationActionType;
}

export type PaginationReducer = (state: PaginationState, action: PaginationAction) => PaginationState;

export interface Pagination {
	setPageNumber: (page: number) => void;
	setPerPage: (newPageNumber: number, newPerPage: number) => void;
	setTotal: (total: number) => void;
}

export interface PaginationProps extends PaginationState, Pagination {}
