import React, { createContext } from 'react';

import { RRuleConfig } from '../types';

const ConfigContext = createContext<RRuleConfig>(null);

const { Provider, Consumer: ConfigConsumer } = ConfigContext;

export interface ConfigProviderProps {
	config?: RRuleConfig;
}
const ConfigProvider: React.FC<ConfigProviderProps> = ({ children, config }) => {
	return <Provider value={config}>{children}</Provider>;
};

export { ConfigContext, ConfigProvider, ConfigConsumer };
