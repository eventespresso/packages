import { createContext, useMemo } from 'react';

import { DEFAULT_DATE_FORMAT, DEFAULT_TIME_FORMAT, DATETIME_FORMAT } from '@eventespresso/constants';

import { FormConfig } from '../types';

const FormConfigContext = createContext<FormConfig>(null);

const { Provider, Consumer: FormConfigConsumer } = FormConfigContext;

export interface FormConfigProviderProps {
	config?: FormConfig;
}

const DEFAULT_CONFIG: FormConfig = {
	dateFormat: DEFAULT_DATE_FORMAT,
	timeFormat: DEFAULT_TIME_FORMAT,
	dateTimeFormat: DATETIME_FORMAT,
	locale: 'en_US',
};

const FormConfigProvider: React.FC<FormConfigProviderProps> = ({ children, config }) => {
	const value = useMemo(() => ({ ...DEFAULT_CONFIG, ...config }), [config]);
	return <Provider value={value}>{children}</Provider>;
};

export { FormConfigContext, FormConfigProvider, FormConfigConsumer };
