import React, { createContext } from 'react';

import type { ProviderProps, ContextProps } from './types';

import { usePrevNext } from '@eventespresso/hooks';

const Context = createContext<ContextProps>(null);

const { Provider, Consumer } = Context;

const ContextProvider: React.FC<ProviderProps> = ({ children, datetime }) => {
	const stepState = usePrevNext();

	const value: ContextProps = {
		datetime,
		stepState,
	};

	return <Provider value={value}>{children}</Provider>;
};

export { Context, ContextProvider, Consumer };
