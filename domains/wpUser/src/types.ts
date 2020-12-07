import type { EntityMetaMap } from '@eventespresso/services';

export type TicketsMeta = EntityMetaMap;

export interface WpUserData {
	ticketsMeta?: TicketsMeta;
}
