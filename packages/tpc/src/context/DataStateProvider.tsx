import { createContext } from 'react';

import { BaseProps } from '../types';
import { DataStateManager, useDataStateManager } from '../data';

const DataStateContext = createContext<DataStateManager>(null);

const { Provider, Consumer: DataStateConsumer } = DataStateContext;

const DataStateProvider: React.FC<BaseProps> = ({ children, ticketId }) => {
	const data = useDataStateManager({ ticketId });

	return <Provider value={data}>{children}</Provider>;
};

export { DataStateContext, DataStateProvider, DataStateConsumer };
