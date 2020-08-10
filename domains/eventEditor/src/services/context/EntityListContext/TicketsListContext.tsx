import React, { createContext, useEffect } from 'react';

import { useMemoStringify } from '@eventespresso/hooks';
import type { EntityListContextProps } from '../types';
import { TicketsFilterStateManager } from '@edtrServices/filterState';
import { useTicketsListFilterStateManager } from '@edtrServices/filterState/tickets';
import { useFilteredEntities } from '@eventespresso/components';
import { domain, ticketsList, useTickets } from '@eventespresso/edtr-services';
import type { Ticket } from '@eventespresso/edtr-services';
import { notTrashed, getGuids } from '@eventespresso/predicates';
import { useEdtrState } from '@eventespresso/edtr-services';
import { entityListCacheIdString } from '@eventespresso/services';

export type TicketsListContextProps = EntityListContextProps<TicketsFilterStateManager, Ticket>;

export const TicketsListContext = createContext<TicketsListContextProps>(null);

export const TicketsListProvider: React.FC = ({ children }) => {
	const tickets = useTickets();
	const filters = useTicketsListFilterStateManager();

	// memoize filter state
	const filterState = useMemoStringify(filters);

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

	const value: TicketsListContextProps = { filterState, filteredEntities };

	return <TicketsListContext.Provider value={value}>{children}</TicketsListContext.Provider>;
};
