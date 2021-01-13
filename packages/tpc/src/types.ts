import type { EntityId } from '@eventespresso/data';
import type { TPCDataState, TpcPriceModifier } from '@eventespresso/edtr-services';

export interface BaseProps {
	ticketId: EntityId;
}

export interface TPCModalProps {
	onSubmit: (data: TPCDataState) => void;
}

export interface PriceModifierProps {
	price: TpcPriceModifier;
	index?: number;
}
