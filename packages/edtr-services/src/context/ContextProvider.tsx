import React from 'react';

import { DataProvider } from '@eventespresso/data';
import { ThemeProvider } from '@eventespresso/adapters';
import { ConfigProvider, FeaturesProvider, RelationsProvider, StatusProvider } from '@eventespresso/services';
import { GlobalModalProvider } from '@eventespresso/registry';
import { EdtrStateProvider } from './EdtrStateContext';

export const ServiceProvider: React.FC = ({ children }) => {
	return (
		<ThemeProvider>
			<StatusProvider>
				<ConfigProvider>
					<FeaturesProvider>
						<RelationsProvider>
							<EdtrStateProvider>
								<GlobalModalProvider>{children}</GlobalModalProvider>
							</EdtrStateProvider>
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
