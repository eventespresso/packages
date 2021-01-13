import type { Datetime, RemTicket } from '@eventespresso/edtr-services';

export interface BaseProps {
	deleteTicket?: any;
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
