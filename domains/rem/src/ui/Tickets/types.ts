import type { Datetime, Ticket } from '@eventespresso/edtr-services';

export interface TicketCardProps {
	ticket: Ticket;
}

export interface OffsetProps {
	datetime: Datetime;
	ticket: Ticket;
}

export interface Offset {
	startDuration: number;
	startUnit: string;
	startPosition: string;
	endDuration: number;
	endUnit: string;
	endPosition: string;
}
