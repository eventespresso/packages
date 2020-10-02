import type { InlineEditCurrencyProps, EntityListViewProps, EntityListItemProps } from '@eventespresso/components';
import type { EntityId } from '@eventespresso/data';
import type { Ticket } from '@eventespresso/edtr-services';
import type { TicketsFilterStateManager } from '@edtrServices/filterState';

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
