import React from 'react';

import { DataProvider } from '@eventespresso/data';
import { ThemeProvider } from '@eventespresso/adapters';
import { ConfigProvider, FeaturesProvider, RelationsProvider, StatusProvider } from '@eventespresso/services';
import { GlobalModalProvider } from '@eventespresso/registry';

export const ServiceProvider: React.FC = ({ children }) => {
	return (
		<ThemeProvider>
			<StatusProvider>
				<ConfigProvider>
					<FeaturesProvider>
						<RelationsProvider>
							<GlobalModalProvider>{children}</GlobalModalProvider>
						</RelationsProvider>
					</FeaturesProvider>
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
