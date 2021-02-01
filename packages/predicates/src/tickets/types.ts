import type { Ticket } from '@eventespresso/edtr-services';

export type TicketPred = (ticket: Ticket) => boolean;
