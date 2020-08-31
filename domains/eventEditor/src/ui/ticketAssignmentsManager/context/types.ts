import { RelationalData } from '@eventespresso/services';

import type { BaseProps } from '../types';

export interface ExtraContextProps {
	onCloseModal?: VoidFunction;
}

export interface ProviderProps extends BaseProps, ExtraContextProps {}

export interface ContextProps extends BaseProps, ExtraContextProps {}

export interface WithContextProps extends ExtraContextProps, BaseProps {}

export interface TAMModalProps extends ExtraContextProps, BaseProps {
	onSubmit: (data: RelationalData) => void;
}
