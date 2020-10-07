import React, { createContext, useEffect } from 'react';

import { useFilteredEntities } from '@eventespresso/services';
import { getGuids, notTrashed } from '@eventespresso/predicates';
import { entityListCacheIdString } from '@eventespresso/utils';

import { useDatesListFilterState } from '../../../filterState';
import { domain, datesList } from '../../../constants';
import type { Datetime } from '../../../apollo';
import { useDatetimes } from '../../../apollo';
import { useEdtrState } from '../../../hooks';

const FilteredDatesContext = createContext<Array<Datetime>>(null);

const { Provider, Consumer: FilteredDatesConsumer } = FilteredDatesContext;

const FilteredDatesProvider: React.FC = ({ children }) => {
	const datetimes = useDatetimes();

	const filterState = useDatesListFilterState();

	const { setSortBy, sortingEnabled } = filterState;

	let filteredEntities = useFilteredEntities(domain, datesList, datetimes, filterState);

	if (filterState.sortingEnabled) {
		filteredEntities = notTrashed(filteredEntities);
	}

	// Update Edtr state for isChained filter
	const { setVisibleDatetimeIds } = useEdtrState();
	const cacheIdStr = entityListCacheIdString(filteredEntities);
	useEffect(() => {
		// update only when not sorting
		if (!sortingEnabled) {
			setVisibleDatetimeIds(getGuids(filteredEntities));
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

export { FilteredDatesContext, FilteredDatesProvider, FilteredDatesConsumer };
