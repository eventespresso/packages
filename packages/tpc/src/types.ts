import type { EntityId } from '@eventespresso/data';
import type { Price, useTicketPrices } from '@eventespresso/edtr-services';
import { DataState, TpcTicket } from './data';

export interface BaseProps {
	ticketId: EntityId;
	getTicketPrices?: ReturnType<typeof useTicketPrices>;
	getTicket?: (id: EntityId) => TpcTicket;
}

export interface TPCModalProps {
	onSubmit: (data: DataState) => Promise<void>;
}

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
