import {
	SortBy,
	EntityFilterState,
	EntityFilterAction,
	EntityFilterActionType,
	EntityFilterStateManager,
	EntityFilterStateReducer,
} from '@eventespresso/edtr-services';
import { EntityListFilterStateManager } from '@eventespresso/unknown';

export interface DatetimesFilterState extends EntityFilterState {
	sales: DatetimeSales;
	status: DatetimeStatus;
}

export type DatetimesFilterActionType = 'SET_SALES' | 'SET_STATUS' | EntityFilterActionType;

export interface DatetimesFilterAction
	extends Partial<DatetimesFilterState>,
		EntityFilterAction<DatetimesFilterActionType> {}

export interface DatetimesFilterStateManager
	extends EntityListFilterStateManager<SortBy>,
		EntityFilterStateManager,
		DatetimesFilterState {
	setSales: (sales: DatetimeSales) => void;
	setStatus: (status: DatetimeStatus) => void;
}

export type DatetimesFilterStateReducer = EntityFilterStateReducer<DatetimesFilterState, DatetimesFilterAction>;

export enum DatetimeSales {
	above90Capacity = 'above90Capacity',
	above75Capacity = 'above75Capacity',
	above50Capacity = 'above50Capacity',
	all = 'all',
	below50Capacity = 'below50Capacity',
}

export enum DatetimeStatus {
	activeUpcoming = 'activeUpcoming',
	activeOnly = 'activeOnly',
	all = 'all',
	expiredOnly = 'expiredOnly',
	nextActiveUpcomingOnly = 'nextActiveUpcomingOnly',
	recentlyExpiredOnly = 'recentlyExpiredOnly',
	soldOutOnly = 'soldOutOnly',
	trashedOnly = 'trashedOnly',
	upcomingOnly = 'upcomingOnly',
}
