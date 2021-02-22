import { createContext } from 'react';

const { Consumer, Provider } = createContext({
	name: null,
});

export { Provider as ContextProvider, Consumer };
