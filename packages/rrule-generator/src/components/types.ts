import { ConfigProviderProps, StateProviderProps } from '../context';

export interface BaseProps {
	id?: string;
}

export interface RRuleGeneratorProps extends BaseProps, ConfigProviderProps, StateProviderProps {
	onChange: (rRuleString: string) => void;
	hideStart?: boolean;
	hideEnd?: boolean;
	hideError?: boolean;
	showReadable?: boolean;
}

export type OnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type OnChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => void;
