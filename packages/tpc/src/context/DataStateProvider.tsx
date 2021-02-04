import { createContext } from 'react';

import { BaseProps } from '../types';
import { DataStateManager, useDataStateManager } from '../data';

const DataStateContext = createContext<DataStateManager>(null);

const { Provider, Consumer: DataStateConsumer } = DataStateContext;

const DataStateProvider: React.FC<BaseProps> = ({ children, ...props }) => {
	const data = useDataStateManager(props);

	return <Provider value={data}>{children}</Provider>;
};

export { DataStateContext, DataStateProvider, DataStateConsumer };
