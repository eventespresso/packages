import type { EntityListViewProps, EntityListItemProps } from '@eventespresso/components';
import type { Ticket } from '@eventespresso/edtr-services';
import type { TicketsFilterStateManager } from '@edtrServices/filterState';

export interface TicketsListViewProps extends EntityListViewProps<Ticket, TicketsFilterStateManager> {}

export interface TicketItemProps extends Required<Pick<EntityListItemProps<Ticket>, 'entity'>> {
	adminUrl?: string;
	eventId?: number;
}
