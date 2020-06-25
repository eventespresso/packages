import type { EntityListFilterStateManager } from '@eventespresso/components';
import type { TicketsSales, TicketsStatus } from '@eventespresso/predicates';

import type {
	SortBy,
	EntityFilterState,
	EntityFilterAction,
	EntityFilterActionType,
	EntityFilterStateManager,
	EntityFilterStateReducer,
} from '../';

export interface TicketsFilterState extends EntityFilterState {
	isChained: boolean;
	sales: TicketsSales;
	status: TicketsStatus;
}

export type TicketsFilterActionType = 'SET_SALES' | 'SET_STATUS' | 'TOGGLE_IS_CHAINED' | EntityFilterActionType;

export interface TicketsFilterAction extends Partial<TicketsFilterState>, EntityFilterAction<TicketsFilterActionType> { }

export interface TicketsFilterStateManager
	extends EntityListFilterStateManager<SortBy>,
	EntityFilterStateManager,
	TicketsFilterState {
	setSales: (sales: TicketsSales) => void;
	setStatus: (status: TicketsStatus) => void;
	toggleIsChained: VoidFunction;
	visibleDatesStr: string;
}

export type TicketsFilterStateReducer = EntityFilterStateReducer<TicketsFilterState, TicketsFilterAction>;
