import { createContext } from 'react';

import { DataStateManager, useDataStateManager } from '../data';

const DataStateContext = createContext<DataStateManager>(null);

const { Provider, Consumer: DataStateConsumer } = DataStateContext;

const DataStateProvider: React.FC = ({ children }) => {
	const data = useDataStateManager();

	return <Provider value={data}>{children}</Provider>;
};

export { DataStateContext, DataStateProvider, DataStateConsumer };
