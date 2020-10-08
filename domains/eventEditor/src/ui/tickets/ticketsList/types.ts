import type { InlineEditCurrencyProps, EntityListViewProps, EntityListItemProps } from '@eventespresso/components';
import type { EntityId } from '@eventespresso/data';
import type { Ticket, TicketsFilterStateManager } from '@eventespresso/edtr-services';

export interface TicketsListViewProps extends EntityListViewProps<Ticket, TicketsFilterStateManager> {}

export interface TicketItemProps extends Required<Pick<EntityListItemProps<Ticket>, 'entity'>> {
	adminUrl?: string;
	eventId?: number;
}

export interface EditablePriceProps extends InlineEditCurrencyProps {
	className?: string;
	id: EntityId;
	price: number;
}
