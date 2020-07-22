import type { DateAndTime } from '@eventespresso/edtr-services';
import type { UpdateTicketInput, Datetime, Ticket } from '@eventespresso/edtr-services';

export interface BaseProps {
	ticket: Ticket;
}

export interface TicketFormShape extends Omit<UpdateTicketInput, 'prices'> {
	dateTime?: DateAndTime;
	position?: 'before' | 'after';
	startOrEnd?: 'start' | 'end';
	unit?: 'months' | 'weeks' | 'days' | 'hours' | 'minutes';
	unitValue?: number;
	isShared?: boolean;
}

export interface TicketCardProps {
	onCopy?: VoidFunction;
	onTrash?: VoidFunction;
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
