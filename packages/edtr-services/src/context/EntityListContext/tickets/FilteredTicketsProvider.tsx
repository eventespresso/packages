import React, { createContext, useEffect } from 'react';

import { getGuids, notTrashed } from '@eventespresso/predicates';
import { useFilteredEntities } from '@eventespresso/services';
import { entityListCacheIdString } from '@eventespresso/utils';

import { useTicketsListFilterState } from '../../../filterState';
import { domain, ticketsList } from '../../../constants';
import type { Ticket } from '../../../apollo';
import { useTickets } from '../../../apollo';
import { useEdtrState } from '../../../hooks';

const FilteredTicketsContext = createContext<Array<Ticket>>(null);

const { Provider, Consumer: FilteredTicketsConsumer } = FilteredTicketsContext;

const FilteredTicketsProvider: React.FC = ({ children }) => {
	const tickets = useTickets();

	const filterState = useTicketsListFilterState();

	const { setSortBy, sortingEnabled } = filterState;

	let filteredEntities = useFilteredEntities(domain, ticketsList, tickets, filterState);

	if (filterState.sortingEnabled) {
		filteredEntities = notTrashed(filteredEntities);
	}

	// Update Edtr state for bulk edit.
	const { setVisibleTicketIds } = useEdtrState();
	const cacheIdStr = entityListCacheIdString(filteredEntities);
	useEffect(() => {
		// update only when not sorting
		if (!sortingEnabled) {
			setVisibleTicketIds(getGuids(filteredEntities));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cacheIdStr, sortingEnabled]);

	// set sortBy to 'order' when sorting is enabled
	useEffect(() => {
		if (sortingEnabled) {
			setSortBy('order');
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortingEnabled]);

	return <Provider value={filteredEntities}>{children}</Provider>;
};

export { FilteredTicketsContext, FilteredTicketsProvider, FilteredTicketsConsumer };