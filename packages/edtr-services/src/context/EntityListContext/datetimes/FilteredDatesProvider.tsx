import React, { createContext, useEffect } from 'react';

import { useFilteredEntities } from '@eventespresso/services';
import { getGuids, notTrashed } from '@eventespresso/predicates';
import { useMemoStringify } from '@eventespresso/hooks';
import type { EntityId } from '@eventespresso/data';

import { useDatesListFilterState } from '../../../filterState';
import { domain, datesList } from '../../../constants';
import { useDatetimes } from '../../../apollo';
import { useEdtrState } from '../../../hooks';

const FilteredDatesContext = createContext<Array<EntityId>>(null);

const { Provider, Consumer: FilteredDatesConsumer } = FilteredDatesContext;

const FilteredDatesProvider: React.FC = ({ children }) => {
	const datetimes = useDatetimes();

	const filterState = useDatesListFilterState();

	const { setSortBy, sortingEnabled } = filterState;

	let filteredEntities = useFilteredEntities(domain, datesList, datetimes, filterState);

	if (filterState.sortingEnabled) {
		filteredEntities = notTrashed(filteredEntities);
	}
	const filteredEntityIds = useMemoStringify(getGuids(filteredEntities));

	// Update Edtr state for isChained filter
	const { setVisibleDatetimeIds } = useEdtrState();
	useEffect(() => {
		// update only when not sorting
		if (!sortingEnabled) {
			setVisibleDatetimeIds(filteredEntityIds);
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

export { FilteredDatesContext, FilteredDatesProvider, FilteredDatesConsumer };
