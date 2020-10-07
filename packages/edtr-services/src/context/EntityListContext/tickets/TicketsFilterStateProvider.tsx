import React, { createContext } from 'react';

import type { TicketsFilterStateManager } from '../../../filterState';

import { useTicketsListFilterStateManager } from '../../../filterState';

const TicketsFilterStateContext = createContext<TicketsFilterStateManager>(null);

const { Provider, Consumer: TicketsFilterStateConsumer } = TicketsFilterStateContext;

const TicketsFilterStateProvider: React.FC = ({ children }) => {
	const filterState = useTicketsListFilterStateManager();

	return <Provider value={filterState}>{children}</Provider>;
};

export { TicketsFilterStateContext, TicketsFilterStateProvider, TicketsFilterStateConsumer };
