import React, { createContext } from 'react';

import { RRuleConfig } from '../types';
import { RRuleStateManager, useRRuleStateManager } from '../state';

const StateContext = createContext<RRuleStateManager>(null);

const { Provider, Consumer: StateConsumer } = StateContext;

export interface StateProviderProps {
	config?: RRuleConfig;
}
const StateProvider: React.FC<StateProviderProps> = ({ children, config }) => {
	const stateManager = useRRuleStateManager(config);
	return <Provider value={stateManager}>{children}</Provider>;
};

export { StateContext, StateProvider, StateConsumer };
