import React from 'react';

import { EdtrStateProvider } from '../EdtrStateContext';
import { ContextProvider } from '@eventespresso/edtr-services';

export const ContextProviders: React.FC = ({ children }) => (
	<ContextProvider>
		<EdtrStateProvider>{children}</EdtrStateProvider>
	</ContextProvider>
);
