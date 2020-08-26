import React, { createContext } from 'react';

import { GlobalModalManager } from './types';
import useGlobalModalManager from './useGlobalModalManager';

const GlobalModalContext = createContext<GlobalModalManager>(null);

const { Provider, Consumer: GlobalModalConsumer } = GlobalModalContext;

const GlobalModalProvider: React.FC = ({ children }) => {
	const value = useGlobalModalManager();
	return <Provider value={value}>{children}</Provider>;
};

export { GlobalModalContext, GlobalModalProvider, GlobalModalConsumer };
