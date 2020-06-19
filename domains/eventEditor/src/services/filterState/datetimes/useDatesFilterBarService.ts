import { useEffect } from 'react';

import { useFilterBarService } from '@eventespresso/unknown';
import { salesFilter, statusFilter, sortDates} from '@eventespresso/predicates';
import { datesList, domain } from '@edtrServices/constants';
import { entityListSearch } from '@eventespresso/services';
import { Datetime } from '@eventespresso/edtr-services';
import { DatetimesFilterStateManager } from '@edtrServices/filterState';

type Domain = typeof domain;
type DFSM = DatetimesFilterStateManager;

const useDatesFilterBarService = (): void => {
	const {
		registerFilter: registerDatesFilter,
		registerSearch: registerDatesSearch,
		registerSorter: registerDatesSorter,
	} = useFilterBarService<Domain, typeof datesList, Datetime, DFSM>(domain, datesList);

	useEffect(() => {
		// Register sales filter
		const unsubscribeSalesFilter = registerDatesFilter(({ entityList, filterState }) => {
			return salesFilter({ dates: entityList, sales: filterState.sales });
		}, 11);

		// Register status filter
		const unsubscribeStatusFilter = registerDatesFilter(({ entityList, filterState }) => {
			return statusFilter({ dates: entityList, status: filterState.status });
		}, 9);

		// Register search
		const unsubscribeDatesSearch = registerDatesSearch(({ entityList, filterState }) => {
			return entityListSearch<Datetime>({
				entities: entityList,
				searchFields: ['name', 'description'],
				searchText: filterState.searchText,
			});
		});

		// Register sorter
		const unsubscribeDatesSorter = registerDatesSorter(({ entityList, filterState }) => {
			return sortDates({ dates: entityList, sortBy: filterState.sortBy });
		});

		// Housekeeping
		return (): void => {
			unsubscribeDatesSearch();
			unsubscribeDatesSorter();
			unsubscribeSalesFilter();
			unsubscribeStatusFilter();
		};
	}, [registerDatesFilter, registerDatesSearch, registerDatesSorter]);
};

export default useDatesFilterBarService;
