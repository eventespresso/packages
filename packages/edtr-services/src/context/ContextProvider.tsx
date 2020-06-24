import React from 'react';

import { DataProvider } from '@eventespresso/data';
import { ThemeProvider } from '@eventespresso/adapters';
import { ConfigProvider, RelationsProvider, StatusProvider } from '@eventespresso/services';

export const ServiceProvider: React.FC = ({ children }) => {
	return (
		<ThemeProvider>
			<StatusProvider>
				<ConfigProvider>
					<RelationsProvider>{children}</RelationsProvider>
				</ConfigProvider>
			</StatusProvider>
		</ThemeProvider>
	);
};

export const ContextProvider: React.FC = ({ children }) => (
	<DataProvider>
		<ServiceProvider>{children}</ServiceProvider>
	</DataProvider>
);
