import React, { createContext } from 'react';

import { RRuleConfig } from '../types';

const ConfigContext = createContext<RRuleConfig>(null);

const { Provider, Consumer: ConfigConsumer } = ConfigContext;

export interface ConfigProviderProps {
	config?: RRuleConfig;
}

const DEFAULT_CONFIG: RRuleConfig = {
	frequencies: ['YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY'],
	yearlyModes: ['ON', 'ON_THE'],
	monthlyModes: ['ON', 'ON_THE'],
	endModes: ['AFTER', 'ON_DATE'],
	weekStartsOn: 'MO',
	enableTimepicker: true,
	// locale: 'en_US',
};

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children, config }) => {
	const mergedConfig = { ...DEFAULT_CONFIG, ...config };
	return <Provider value={mergedConfig}>{children}</Provider>;
};

export { ConfigContext, ConfigProvider, ConfigConsumer };
