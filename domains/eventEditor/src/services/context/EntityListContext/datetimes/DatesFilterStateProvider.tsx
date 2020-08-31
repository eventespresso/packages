import React, { createContext } from 'react';

import type { DatetimesFilterStateManager } from '@eventespresso/edtr-services';

import { useDatesListFilterStateManager } from '@edtrServices/filterState';

const DatesFilterStateContext = createContext<DatetimesFilterStateManager>(null);

const { Provider, Consumer: DatesFilterStateConsumer } = DatesFilterStateContext;

const DatesFilterStateProvider: React.FC = ({ children }) => {
	const filterState = useDatesListFilterStateManager();

	return <Provider value={filterState}>{children}</Provider>;
};

export { DatesFilterStateContext, DatesFilterStateProvider, DatesFilterStateConsumer };
