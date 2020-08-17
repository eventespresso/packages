import type { Datetime } from '@eventespresso/edtr-services';
import type { IntervalType } from '@eventespresso/services';

import { RemTicket } from '../../data';

export interface BaseProps {
	ticket: RemTicket;
}

export type TicketSatesFields = {
	position?: 'before' | 'after';
	startOrEnd?: 'start' | 'end';
	unit?: IntervalType;
	unitValue?: number;
};

export type DateAndTime = {
	date: Date;
	time: Date;
};

export interface RemTicketFields extends Partial<TicketSatesFields>, Partial<DateAndTime> {
	dateTimeStart?: DateAndTime;
	dateTimeEnd?: DateAndTime;
	ticketSalesStart?: TicketSatesFields;
	ticketSalesEnd?: TicketSatesFields;
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
