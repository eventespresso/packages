import { createContext } from 'react';

import { usePrevNext } from '@eventespresso/hooks';
import type { StepsState } from './types';

const StepsStateContext = createContext<StepsState>(null);

const { Provider, Consumer: StepsStateConsumer } = StepsStateContext;

const StepsStateProvider: React.FC = ({ children }) => {
	const value = usePrevNext();

	return <Provider value={value}>{children}</Provider>;
};

export { StepsStateContext, StepsStateProvider, StepsStateConsumer };
