import { createContext } from 'react';

import { RelationsManager, useRelationsManager } from '../relations';

const RelationsContext = createContext<RelationsManager | null>(null);

const { Provider, Consumer: RelationsConsumer } = RelationsContext;

const RelationsProvider: React.FC = ({ children }) => {
	const relations = useRelationsManager();
	return <Provider value={relations}>{children}</Provider>;
};

export { RelationsContext, RelationsProvider, RelationsConsumer };
