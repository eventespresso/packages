import React, { createContext } from 'react';

import { RRuleStateManager, useRRuleStateManager } from '../state';
import { useRRuleConfig } from '../hooks';

const StateContext = createContext<RRuleStateManager>(null);

const { Provider, Consumer: StateConsumer } = StateContext;

const StateProvider: React.FC = ({ children }) => {
	const config = useRRuleConfig();
	const stateManager = useRRuleStateManager(config);
	return <Provider value={stateManager}>{children}</Provider>;
};

export { StateContext, StateProvider, StateConsumer };
