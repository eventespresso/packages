import { createContext } from 'react';

import { FormStateManager, useFormStateManager } from '../state';
import { FormSection, FormElement } from '../types';

const FormStateContext = createContext<FormStateManager>(null);

const { Provider, Consumer: FormStateConsumer } = FormStateContext;

export interface FormStateProviderProps {
	initialSections?: Array<FormSection>;
	initialElements?: Array<FormElement>;
}

const FormStateProvider: React.FC<FormStateProviderProps> = ({ children, ...props }) => {
	const data = useFormStateManager(props);

	return <Provider value={data}>{children}</Provider>;
};

export { FormStateContext, FormStateProvider, FormStateConsumer };
