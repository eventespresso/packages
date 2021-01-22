import { createContext } from 'react';

import { TPCDataStateManager, useTPCDataStateManager } from '../';
import type { BaseTPCProps } from '../types';

export const TPCDataStateContext = createContext<TPCDataStateManager>(null);

const { Provider, Consumer: TPCDataStateConsumer } = TPCDataStateContext;

export const TPCDataStateProvider: React.FC<BaseTPCProps> = ({ children, ticketId }) => {
	const data = useTPCDataStateManager({ ticketId });

	return <Provider value={data}>{children}</Provider>;
};

export { TPCDataStateConsumer };
