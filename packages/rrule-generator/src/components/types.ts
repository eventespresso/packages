import { StateProviderProps } from '../context';

export interface BaseProps {
	id?: string;
}

export interface RRuleGeneratorProps extends BaseProps, StateProviderProps {
	value?: string;
	onChange: (rRuleString: string) => void;
	hideStart?: boolean;
	hideEnd?: boolean;
	hideError?: boolean;
}
