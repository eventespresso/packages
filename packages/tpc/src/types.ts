import type { EntityId } from '@eventespresso/data';
import type { Price } from '@eventespresso/edtr-services';

export interface BaseProps {
	ticketId: EntityId;
}

export interface ModalContainerProps extends BaseProps {}

export interface TpcPriceModifier extends Price {
	priceType: EntityId;
	priceTypeOrder: number | string;
	isNew?: boolean;
	isModified?: boolean;
}

export interface PriceModifierProps {
	price: TpcPriceModifier;
	index?: number;
}
