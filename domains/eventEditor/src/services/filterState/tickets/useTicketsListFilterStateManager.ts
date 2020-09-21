import { useCallback, useEffect, useMemo, useState } from 'react';

import { DisplayStartOrEndDate, SortBy, ticketsList } from '@eventespresso/edtr-services';
import { useEntityListFilterStateManager } from '@eventespresso/components';
import { useEdtrState } from '@eventespresso/edtr-services';
import { useSessionStorageReducer } from '@eventespresso/storage';

import reducer from './reducer';
import { TicketsSales, TicketsStatus } from './types';
import type { TicketsFilterState, TicketsFilterStateManager } from './types';

type FSM = TicketsFilterStateManager;

const initialState: TicketsFilterState = {
	displayStartOrEndDate: DisplayStartOrEndDate.start,
	isChained: true,
	sales: TicketsSales.all,
	status: TicketsStatus.onSaleAndPending,
};

const useTicketsListFilterStateManager = (): FSM => {
	const [state, dispatch] = useSessionStorageReducer('ticket-list-filter-state', reducer, initialState);

	const [visibleDatesStr, setVisibleDatesStr] = useState('');

	const { visibleDatetimeIds } = useEdtrState();

	const entityFilterState = useEntityListFilterStateManager<SortBy>('order', ticketsList);

	const { setPageNumber } = entityFilterState;

	// subscribe to visible dates for isChained
	useEffect(() => {
		if (state.isChained) {
			setVisibleDatesStr(visibleDatetimeIds.join(':'));
		}
	}, [state.isChained, visibleDatetimeIds]);

	const resetPageNumber = useCallback(
		(filter: TicketsSales | TicketsStatus): void => {
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

	const toggleIsChained: FSM['toggleIsChained'] = useCallback(() => {
		dispatch({
			type: 'TOGGLE_IS_CHAINED',
		});
	}, [dispatch]);

	return useMemo(
		() => ({
			...state,
			...entityFilterState,
			setDisplayStartOrEndDate,
			setSales,
			setStatus,
			toggleIsChained,
			visibleDatesStr,
		}),
		[entityFilterState, visibleDatesStr, setDisplayStartOrEndDate, setSales, toggleIsChained, state, setStatus]
	);
};

export default useTicketsListFilterStateManager;
