import type { BaseProps } from '../types';

export interface ExtraContextProps {
	onClose?: VoidFunction;
}

export interface ProviderProps extends BaseProps, ExtraContextProps {}

export interface ContextProps extends ExtraContextProps {}

export interface WithContextProps extends ExtraContextProps, BaseProps {}
