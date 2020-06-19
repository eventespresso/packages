import { useEffect, useRef } from 'react';

import { useFilterBarService } from '@eventespresso/unknown';
import { salesFilter, statusFilter, sortTickets} from '@eventespresso/predicates';
import { domain, ticketsList } from '@edtrServices/constants';
import { entityListSearch } from '@eventespresso/services';
import type {Ticket, TicketsFilterStateManager } from '@eventespresso/edtr-services';
import useIsChainedFilter from './useIsChainedFilter';

type Domain = typeof domain;
type TFSM = TicketsFilterStateManager;

const useTicketsFilterBarService = (): void => {
	const {
		registerFilter: registerTicketsFilter,
		registerSearch: registerTicketsSearch,
		registerSorter: registerTicketsSorter,
	} = useFilterBarService<Domain, typeof ticketsList, Ticket, TFSM>(domain, ticketsList);

	/**
	 * isChained filter needs special treatment :)
	 *
	 * Unlike other sorters and filters, isChained filter is dependent upon
	 * external state which can change. Thus we need to update our filter callback
	 * to make sure the stale state is not bound to the filter callback.
	 */
	const [isChainedFilter, isChainedDeps] = useIsChainedFilter();
	// To avoid multiple filter registrations, we will store the aleady registered
	// filter unSubscribe callback in ref to use it to remove the existing filter.
	const unSubIsChainedFilterRef = useRef<VoidFunction>();

	useEffect(() => {
		// If already register
		if (typeof unSubIsChainedFilterRef.current === 'function') {
			// de-register
			unSubIsChainedFilterRef.current();
		}
		// Register isChained filter
		const unSubscribeIsChainedFilter = registerTicketsFilter(({ entityList, filterState }) => {
			return isChainedFilter({ isChained: filterState.isChained, tickets: entityList });
		}, 9); // we want isChained to run first

		// update ref, it won't cause rerendersٖ
		unSubIsChainedFilterRef.current = unSubscribeIsChainedFilter;

		// Housekeeping
		return (): void => {
			unSubscribeIsChainedFilter();
		};
	}, [isChainedFilter, isChainedDeps, registerTicketsFilter]);

	useEffect(() => {
		// Register sales filter
		const unSubscribeSalesFilter = registerTicketsFilter(({ entityList, filterState }) => {
			return salesFilter({ sales: filterState.sales, tickets: entityList });
		}, 11);

		// Register status filter
		const unSubscribeStatusFilter = registerTicketsFilter(({ entityList, filterState }) => {
			return statusFilter({ status: filterState.status, tickets: entityList });
		}, 10); // 10 by default

		// Register search
		const unSubscribeTicketsSearch = registerTicketsSearch(({ entityList, filterState }) => {
			return entityListSearch<Ticket>({
				entities: entityList,
				searchFields: ['name', 'description'],
				searchText: filterState.searchText,
			});
		});

		// Register sorter
		const unSubscribeTicketsSorter = registerTicketsSorter(({ entityList, filterState }) => {
			return sortTickets({ tickets: entityList, sortBy: filterState.sortBy });
		});

		// Housekeeping
		return (): void => {
			unSubscribeSalesFilter();
			unSubscribeStatusFilter();
			unSubscribeTicketsSearch();
			unSubscribeTicketsSorter();
		};
	}, [registerTicketsFilter, registerTicketsSearch, registerTicketsSorter]);
};

export default useTicketsFilterBarService;
