import type { Entity } from '@eventespresso/data';
import type { AnyObject } from '@eventespresso/utils';

export interface E extends AnyObject, Entity {}

export interface BaseProps {
	ticket: any;
}

export interface FormState {
	addTicket: (ticket: any) => void;
	deleteTicket: (id: string) => void;
	updateTicket: (id: string, details: any) => void;
	tickets?: Array<E>;
}

export interface TicketCardProps {
	onCopy?: VoidFunction;
	onTrash?: VoidFunction;
	ticket: E;
}

export interface OffsetProps {
	datetime: E;
	ticket: E;
}

export interface Offset {
	startDuration: number;
	startUnit: string;
	endDuration: number;
	endUnit: string;
	endOffsetFrom?: string;
}

export interface SimpleTicketsListProps extends FormState {}
