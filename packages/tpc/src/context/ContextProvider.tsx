import { createContext, useMemo } from 'react';

import type { ProviderProps, ContextProps } from './types';
import { DataStateProvider } from './DataStateProvider';

const Context = createContext<ContextProps>(null);

const { Provider, Consumer } = Context;

const ContextProvider: React.FC<ProviderProps> = ({ onClose, ...props }) => {
	const value = useMemo(() => ({ onClose }), [onClose]);

	return (
		<Provider value={value}>
			<DataStateProvider {...props} />
		</Provider>
	);
};

export { Context, ContextProvider, Consumer };
