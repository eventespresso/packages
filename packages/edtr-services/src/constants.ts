import type { Ticket } from '@eventespresso/edtr-services';

export const domain = 'eventEditor';

export const datesList = 'dates-list';

export const ticketsList = 'tickets-list';

export const TICKET_FIELDS_FOR_TPC: Array<keyof Ticket> = [
	'id',
	'name',
	'description',
	'price',
	'quantity',
	'reverseCalculate',
];
