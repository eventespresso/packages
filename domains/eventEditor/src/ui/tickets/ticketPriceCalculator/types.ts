import type React from 'react';
import type { EntityId } from '@eventespresso/data';
import type { Price } from '@eventespresso/edtr-services';

export interface BaseProps {
	ticketId: EntityId;
}

export interface ModalContainerProps extends BaseProps, Omit<Disclosure, 'onOpen'> {}

export interface Disclosure {
	isOpen: boolean;
	onOpen: VoidFunction;
	onClose: VoidFunction;
}

export interface TicketPriceCalculator extends Disclosure {
	ModalContainer: React.FC<ModalContainerProps>;
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
