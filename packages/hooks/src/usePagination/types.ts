import type { Reducer } from 'react';

export interface PaginationState {
	perPage: number;
	pageNumber: number;
}

export type PaginationActionType = 'SET_PER_PAGE' | 'SET_PAGE_NUMBER';

export interface PaginationAction extends Partial<PaginationState> {
	type: PaginationActionType;
}

export interface PaginatedEntities<E> extends Partial<PaginationState> {
	entities: E[];
}

export type PaginationReducer = Reducer<PaginationState, PaginationAction>;

export interface Pagination extends PaginationState {
	setPageNumber: (page: number) => void;
	setPerPage: (newPageNumber: number, newPerPage: number) => void;
}
