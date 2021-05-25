import { createContext } from 'react';

import { FormStateManager, useFormStateManager } from '../state';
import { FormSection } from '../types';

const FormStateContext = createContext<FormStateManager>(null);

const { Provider, Consumer: FormStateConsumer } = FormStateContext;

export interface FormStateProviderProps {
	initialSections?: Array<FormSection>;
}

const FormStateProvider: React.FC<FormStateProviderProps> = ({ children, initialSections }) => {
	const data = useFormStateManager(initialSections);

	return <Provider value={data}>{children}</Provider>;
};

export { FormStateContext, FormStateProvider, FormStateConsumer };
