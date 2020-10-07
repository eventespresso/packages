import { useCallback, useMemo } from 'react';

import { useEntityListFilterStateManager } from '@eventespresso/services';
import { DatetimeSales, DatetimeStatus } from '@eventespresso/predicates';
import { useSessionStorageReducer } from '@eventespresso/storage';

import type { DatetimesFilterState, DatetimesFilterStateManager } from './types';
import { DisplayStartOrEndDate, SortBy } from '../types';
import { datesList } from '../../constants';
import reducer from './reducer';

type FSM = DatetimesFilterStateManager;

const initialState: DatetimesFilterState = {
	displayStartOrEndDate: DisplayStartOrEndDate.start,
	sales: DatetimeSales.all,
	status: DatetimeStatus.activeUpcoming,
};

const useDatesListFilterStateManager = (): FSM => {
	const [state, dispatch] = useSessionStorageReducer('dates-list-filter-state', reducer, initialState);

	const entityFilterState = useEntityListFilterStateManager<SortBy>('order', datesList);

	const { setPageNumber } = entityFilterState;

	const resetPageNumber = useCallback(
		(filter: DatetimeSales | DatetimeStatus): void => {
			if (filter !== state[filter]) {
				setPageNumber(1);
			}
		},
		[setPageNumber, state]
	);

	const setDisplayStartOrEndDate: FSM['setDisplayStartOrEndDate'] = useCallback(
		(displayStartOrEndDate) => {
			dispatch({
				type: 'SET_DISPLAY_START_OR_END_DATE',
				displayStartOrEndDate,
			});
		},
		[dispatch]
	);

	const setSales: FSM['setSales'] = useCallback(
		(sales) => {
			resetPageNumber(sales);

			dispatch({
				type: 'SET_SALES',
				sales,
			});
		},
		[dispatch, resetPageNumber]
	);

	const setStatus: FSM['setStatus'] = useCallback(
		(status) => {
			resetPageNumber(status);

			dispatch({
				type: 'SET_STATUS',
				status,
			});
		},
		[dispatch, resetPageNumber]
	);

	return useMemo(
		() => ({
			...state,
			...entityFilterState,
			setDisplayStartOrEndDate,
			setSales,
			setStatus,
		}),
		[state, setStatus, setSales, setDisplayStartOrEndDate, entityFilterState]
	);
};

export default useDatesListFilterStateManager;
