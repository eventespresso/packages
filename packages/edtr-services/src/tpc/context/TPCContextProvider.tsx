import { createContext, useMemo } from 'react';

import { TPCDataStateProvider } from './TPCDataStateProvider';
import type { ProviderProps, TPCContextProps } from './types';

const TPCContext = createContext<TPCContextProps>(null);

const { Provider, Consumer: TPCConsumer } = TPCContext;

export const TPCContextProvider: React.FC<ProviderProps> = ({ children, ticketId, onClose }) => {
	const value = useMemo(() => ({ onClose }), [onClose]);

	return (
		<Provider value={value}>
			<TPCDataStateProvider ticketId={ticketId}>{children}</TPCDataStateProvider>
		</Provider>
	);
};

export { TPCContext, TPCConsumer };
