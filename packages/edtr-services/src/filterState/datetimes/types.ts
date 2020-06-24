import { EntityListFilterStateManager } from '@eventespresso/components';
import { DatetimeSales, DatetimeStatus } from '@eventespresso/predicates';

import {
	SortBy,
	EntityFilterState,
	EntityFilterAction,
	EntityFilterActionType,
	EntityFilterStateManager,
	EntityFilterStateReducer,
} from '../';

export interface DatetimesFilterState extends EntityFilterState {
	sales: DatetimeSales;
	status: DatetimeStatus;
}

export type DatetimesFilterActionType = 'SET_SALES' | 'SET_STATUS' | EntityFilterActionType;

export interface DatetimesFilterAction
	extends Partial<DatetimesFilterState>,
	EntityFilterAction<DatetimesFilterActionType> { }

export interface DatetimesFilterStateManager
	extends EntityListFilterStateManager<SortBy>,
	EntityFilterStateManager,
	DatetimesFilterState {
	setSales: (sales: DatetimeSales) => void;
	setStatus: (status: DatetimeStatus) => void;
}

export type DatetimesFilterStateReducer = EntityFilterStateReducer<DatetimesFilterState, DatetimesFilterAction>;

