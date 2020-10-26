import React, { createContext, useEffect } from 'react';

import { getGuids, notTrashed } from '@eventespresso/predicates';
import { useFilteredEntities } from '@eventespresso/services';
import type { EntityId } from '@eventespresso/data';
import { useMemoStringify } from '@eventespresso/hooks';

import { useTicketsListFilterState } from '../../../filterState';
import { domain, ticketsList } from '../../../constants';
import { useTickets } from '../../../apollo';
import { useVisibleTicketIds } from '../../../hooks';

const FilteredTicketsContext = createContext<Array<EntityId>>(null);

const { Provider, Consumer: FilteredTicketsConsumer } = FilteredTicketsContext;

const FilteredTicketsProvider: React.FC = ({ children }) => {
	const tickets = useTickets();

	const filterState = useTicketsListFilterState();

	const { setSortBy, sortingEnabled } = filterState;

	let filteredEntities = useFilteredEntities(domain, ticketsList, tickets, filterState);

	if (filterState.sortingEnabled) {
		filteredEntities = notTrashed(filteredEntities);
	}
	const filteredEntityIds = useMemoStringify(getGuids(filteredEntities));

	// Update Edtr state for bulk edit.
	const setVisibleTicketIds = useVisibleTicketIds()[1];
	useEffect(() => {
		// update only when not sorting
		if (!sortingEnabled) {
			setVisibleTicketIds(getGuids(filteredEntities));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filteredEntityIds, sortingEnabled]);

	// set sortBy to 'order' when sorting is enabled
	useEffect(() => {
		if (sortingEnabled) {
			setSortBy('order');
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortingEnabled]);

	return <Provider value={filteredEntityIds}>{children}</Provider>;
};

export { FilteredTicketsContext, FilteredTicketsProvider, FilteredTicketsConsumer };
