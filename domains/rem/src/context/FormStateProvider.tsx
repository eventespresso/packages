import React, { createContext } from 'react';

import { FormStateManager, useFormStateManager } from '../services/data';

const FormStateContext = createContext<FormStateManager>(null);

const { Provider, Consumer: FormStateConsumer } = FormStateContext;

const FormStateProvider: React.FC = ({ children }) => {
	const data = useFormStateManager();

	return <Provider value={data}>{children}</Provider>;
};

export { FormStateContext, FormStateProvider, FormStateConsumer };
