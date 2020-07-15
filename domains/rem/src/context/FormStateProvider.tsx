import React, { createContext } from 'react';

import { FormStateManager, useFormStateManager } from '../services/data';
import useDatetime from './useDatetime';

const FormStateContext = createContext<FormStateManager>(null);

const { Provider, Consumer: FormStateConsumer } = FormStateContext;

const FormStateProvider: React.FC = ({ children }) => {
	const data = useFormStateManager(useDatetime());

	return <Provider value={data}>{children}</Provider>;
};

export { FormStateContext, FormStateProvider, FormStateConsumer };
