import { createContext, useMemo } from 'react';

import type { ProviderProps, ContextProps } from './types';
import { DataStateProvider } from './DataStateProvider';

const Context = createContext<ContextProps>(null);

const { Provider, Consumer } = Context;

const ContextProvider: React.FC<ProviderProps> = ({ children, ticketId, onClose }) => {
	const value = useMemo(() => ({ onClose }), [onClose]);

	return (
		<Provider value={value}>
			<DataStateProvider ticketId={ticketId}>{children}</DataStateProvider>
		</Provider>
	);
};

export { Context, ContextProvider, Consumer };
