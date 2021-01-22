import type { EntityId } from '@eventespresso/data';
import type { Price } from '../../apollo/types';
import type { BaseTPCProps } from '../types';

export interface ExtraContextProps {
	onClose?: VoidFunction;
}

export interface ProviderProps extends BaseTPCProps, ExtraContextProps {}

export interface TPCContextProps extends ExtraContextProps {}

export interface TPCPriceModifier extends Price {
	priceType: EntityId;
	priceTypeOrder: number | string;
	isNew?: boolean;
	isModified?: boolean;
}

export interface WithContextProps extends ExtraContextProps, BaseTPCProps {}
