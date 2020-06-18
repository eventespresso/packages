import React, { createContext } from 'react';

import { StatusManager, useStatusManager } from '../status';

const StatusContext = createContext<StatusManager | null>(null);

const { Provider, Consumer: StatusConsumer } = StatusContext;

const StatusProvider: React.FC = ({ children }) => {
	const statusManager = useStatusManager();
	return <Provider value={statusManager}>{children}</Provider>;
};

export { StatusContext, StatusProvider, StatusConsumer };
