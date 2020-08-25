import { useEffect } from 'react';

import { FilterBarService } from '@eventespresso/registry';
import { dateSalesFilter, dateStatusFilter, sortDates } from '@eventespresso/predicates';
import { datesList, domain } from '@eventespresso/edtr-services';
import { entityListSearch } from '@eventespresso/utils';
import type { Datetime } from '@eventespresso/edtr-services';
import type { DatetimesFilterStateManager } from '@edtrServices/filterState';

type Domain = typeof domain;
type DFSM = DatetimesFilterStateManager;

const {
	registerFilter: registerDatesFilter,
	registerSearch: registerDatesSearch,
	registerSorter: registerDatesSorter,
} = new FilterBarService<Domain, typeof datesList, Datetime, DFSM>(domain, datesList);

const useDatesFilterBarService = (): void => {
	useEffect(() => {
		// Register sales filter
		const unsubscribeSalesFilter = registerDatesFilter(({ entityList, filterState }) => {
			return dateSalesFilter({ dates: entityList, sales: filterState.sales });
		}, 11);

		// Register status filter
		const unsubscribeStatusFilter = registerDatesFilter(({ entityList, filterState }) => {
			return dateStatusFilter({ dates: entityList, status: filterState.status });
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
	}, []);
};

export default useDatesFilterBarService;
