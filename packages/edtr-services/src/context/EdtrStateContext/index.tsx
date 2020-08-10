import React, { createContext } from 'react';

import { EdtrStateManager, useEdtrStateManager } from '../../hooks';

const EdtrStateContext = createContext<EdtrStateManager>(null);

const { Provider, Consumer: EdtrStateConsumer } = EdtrStateContext;

const EdtrStateProvider: React.FC = ({ children }) => {
	const edtrState = useEdtrStateManager();
	return <Provider value={edtrState}>{children}</Provider>;
};

export { EdtrStateContext, EdtrStateProvider, EdtrStateConsumer };
