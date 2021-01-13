import { createContext, useMemo } from 'react';

import { DateTimeFormats, useConfigData, ConfigDataProps } from '../config';
import { useCurrentUser, useGeneralSettings } from '@eventespresso/data';

const ConfigContext = createContext<ConfigDataProps | null>(null);

const { Provider, Consumer: ConfigConsumer } = ConfigContext;

const ConfigProvider: React.FC = ({ children }) => {
	const configData = useConfigData();
	const currentUser = useCurrentUser();
	const generalSettings = useGeneralSettings();
	const dateTimeFormats = generalSettings && DateTimeFormats(generalSettings);

	const config: ConfigDataProps = useMemo(
		() => ({
			...configData,
			currentUser,
			dateTimeFormats,
		}),
		[configData, currentUser, dateTimeFormats]
	);

	return <Provider value={config}>{children}</Provider>;
};

export { ConfigProvider, ConfigConsumer, ConfigContext };
