import { createContext } from 'react';

import type { FormState } from '../types';

const FormStateContext = createContext<FormState>(null);

const { Provider, Consumer: FormConsumer } = FormStateContext;

export interface FormProviderProps {
	formState?: FormState;
}

const FormProvider: React.FC<FormProviderProps> = ({ children, formState }) => {
	return <Provider value={formState}>{children}</Provider>;
};

export { FormStateContext, FormProvider, FormConsumer };
