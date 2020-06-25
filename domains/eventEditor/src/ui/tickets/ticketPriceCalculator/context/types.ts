import type { BaseProps } from '../types';
import type { DataStateManager } from '../data';

export interface ExtraContextProps {
	onClose?: VoidFunction;
}

export interface ProviderProps extends BaseProps, ExtraContextProps {}

export interface ContextProps extends ExtraContextProps {
	dataState: DataStateManager;
}

export interface WithContextProps extends ExtraContextProps, BaseProps {}
