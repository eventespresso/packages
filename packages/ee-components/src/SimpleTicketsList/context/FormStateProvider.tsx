import { createContext } from 'react';

import type { FormState } from '../types';

const FormStateContext = createContext<FormState>(null);

const { Provider, Consumer: ConfigConsumer } = FormStateContext;

export interface ConfigProviderProps {
	formState?: FormState;
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children, formState }) => {
	return <Provider value={formState}>{children}</Provider>;
};

export { FormStateContext, ConfigProvider, ConfigConsumer };
