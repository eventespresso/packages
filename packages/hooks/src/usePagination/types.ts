import type { Entity } from '@eventespresso/data';

export interface PaginationState {
	perPage: number;
	pageNumber: number;
	total: number;
}

export type PaginationActionType = 'SET_PER_PAGE' | 'SET_PAGE_NUMBER' | 'SET_TOTAL';

export interface PaginationAction extends Partial<PaginationState> {
	type: PaginationActionType;
}

export interface PaginatedEntities<E extends Entity | any> extends Partial<PaginationState> {
	entities: E[];
}

export type PaginationReducer = (state: PaginationState, action: PaginationAction) => PaginationState;

export interface Pagination extends PaginationState {
	setPageNumber: (page: number) => void;
	setPerPage: (newPageNumber: number, newPerPage: number) => void;
	setTotal: (total: number) => void;
}
