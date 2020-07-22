import type { DateAndTime } from '@eventespresso/edtr-services';
import type { UpdateTicketInput, Datetime } from '@eventespresso/edtr-services';
import { RemTicket } from '../../data';

export interface BaseProps {
	ticket: RemTicket;
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
	ticket: RemTicket;
}

export interface OffsetProps {
	datetime: Datetime;
	ticket: RemTicket;
}

export interface Offset {
	startDuration: number;
	startUnit: string;
	endDuration: number;
	endUnit: string;
	endOffsetFrom?: string;
}
