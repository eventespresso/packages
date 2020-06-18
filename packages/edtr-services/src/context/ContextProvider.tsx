import React from 'react';

import { withApollo } from '@eventespresso/data';
import { ConfigProvider, RelationsProvider, StatusProvider, ThemeProvider } from '@eventespresso/services';

export const CommonProvider: React.FC = ({ children }) => (
	<ThemeProvider>
		<StatusProvider>
			<ConfigProvider>
				<RelationsProvider>{children}</RelationsProvider>
			</ConfigProvider>
		</StatusProvider>
	</ThemeProvider>
);

export const ContextProvider = withApollo(CommonProvider);
