import { Ticket, TicketsSales, TicketsStatus } from '@eventespresso/edtr-services';

export interface TicketSalesFilter {
	tickets: Ticket[];
	sales: TicketsSales;
}

export interface TicketStatusFilter {
	tickets: Ticket[];
	status: TicketsStatus;
}

export type TicketFilterFn = (tickets: Array<Ticket>) => Array<Ticket>;
