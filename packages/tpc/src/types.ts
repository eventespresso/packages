import type { EntityId } from '@eventespresso/data';
import type { TPCDataState, TPCPriceModifier } from '@eventespresso/edtr-services';

export interface BaseProps {
	ticketId: EntityId;
}

export interface TPCModalProps {
	onSubmit: (data: TPCDataState) => Promise<void>;
}

export interface TpcPriceModifier extends Price {
	priceType: EntityId;
	priceTypeOrder: number | string;
	isNew?: boolean;
	isModified?: boolean;
}

export interface PriceModifierProps {
	price: TPCPriceModifier;
	index?: number;
}
