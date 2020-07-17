import type { DateAndTime } from '@eventespresso/edtr-services';
import type { CreateTicketInput, Datetime, Ticket } from '@eventespresso/edtr-services';

export interface TicketFormShape extends CreateTicketInput {
	dateTime?: DateAndTime;
	position?: 'before' | 'after';
	startOrEnd?: 'start' | 'end';
	unit?: 'months' | 'weeks' | 'days' | 'hours' | 'minutes';
	unitValue?: number;
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
