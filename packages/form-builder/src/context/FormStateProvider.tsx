import { createContext } from 'react';

import { FormState, FormStateManager, useFormStateManager } from '../state';
import { FormSectionRaw, FormElementRaw } from '../types';

const FormStateContext = createContext<FormStateManager>(null);

const { Provider, Consumer: FormStateConsumer } = FormStateContext;

export interface FormStateProviderProps {
	initialSections?: Array<FormSectionRaw>;
	initialElements?: Array<FormElementRaw>;
	topLevelSectionId?: string;
	onChange?: (data: FormState) => void;
}

const FormStateProvider: React.FC<FormStateProviderProps> = ({ children, ...props }) => {
	const data = useFormStateManager(props);

	return <Provider value={data}>{children}</Provider>;
};

export { FormStateContext, FormStateProvider, FormStateConsumer };
