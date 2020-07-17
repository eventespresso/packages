import type { CreateTicketInput, Datetime, Ticket } from '@eventespresso/edtr-services';

export interface TicketFormShape extends CreateTicketInput {
	duration?: number;
	unit?: 'days' | 'hours' | 'minutes';
}

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
	endDuration: number;
	endUnit: string;
	endOffsetFrom?: string;
}
