import { createContext } from 'react';

import { RRuleStateManager, useRRuleStateManager } from '../state';
import { useRRuleConfig } from '../hooks';

const StateContext = createContext<RRuleStateManager>(null);

const { Provider, Consumer: StateConsumer } = StateContext;

export interface StateProviderProps {
	value?: string; // rRule String
}

const StateProvider: React.FC<StateProviderProps> = ({ children, value }) => {
	const config = useRRuleConfig();
	const stateManager = useRRuleStateManager(config, value);
	return <Provider value={stateManager}>{children}</Provider>;
};

export { StateContext, StateProvider, StateConsumer };
