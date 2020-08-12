import type { BaseProps } from '../types';

export interface ExtraContextProps {
	onCloseModal?: VoidFunction;
}

export interface ProviderProps extends BaseProps, ExtraContextProps {}

export interface ContextProps extends BaseProps, ExtraContextProps {}

export interface WithContextProps extends ExtraContextProps, BaseProps {}
