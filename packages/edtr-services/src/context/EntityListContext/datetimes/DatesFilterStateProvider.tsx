import React, { createContext } from 'react';

import type { DatetimesFilterStateManager } from '../../../filterState';

import { useDatesListFilterStateManager } from '../../../filterState';

const DatesFilterStateContext = createContext<DatetimesFilterStateManager>(null);

const { Provider, Consumer: DatesFilterStateConsumer } = DatesFilterStateContext;

const DatesFilterStateProvider: React.FC = ({ children }) => {
	const filterState = useDatesListFilterStateManager();

	return <Provider value={filterState}>{children}</Provider>;
};

export { DatesFilterStateContext, DatesFilterStateProvider, DatesFilterStateConsumer };
