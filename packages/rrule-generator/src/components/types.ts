import { ConfigProviderProps } from '../context';

export interface BaseProps {
	id?: string;
}

export interface RRuleGeneratorProps extends BaseProps, ConfigProviderProps {
	value?: string;
	onChange: (rRuleString: string) => void;
	hideStart?: boolean;
	hideEnd?: boolean;
	hideError?: boolean;
}

export type OnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type OnChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => void;
