import { createContext } from 'react';

import { useFilterStateManager, FilterStateManager } from '../filters/filterState';

const FilterStateContext = createContext<FilterStateManager>(null);

const { Provider, Consumer: FilterStateConsumer } = FilterStateContext;

const FilterStateProvider: React.FC = ({ children }) => {
	const filterstate = useFilterStateManager();

	return <Provider value={filterstate}>{children}</Provider>;
};

export { FilterStateContext, FilterStateProvider, FilterStateConsumer };
