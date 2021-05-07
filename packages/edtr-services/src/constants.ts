import type { Ticket } from '@eventespresso/edtr-services';
import { __ } from '@eventespresso/i18n';

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
	'visibility',
];

export const TICKET_VISIBILITY_OPTIONS = [
	{
		value: 'PUBLIC',
		label: __('Public'),
	},
	{
		value: 'MEMBERS_ONLY',
		label: __('Members only'),
	},
	{
		value: 'ADMINS_ONLY',
		label: __('Admins only'),
	},
	{
		value: 'ADMIN_UI_ONLY',
		label: __('Admin UI only'),
	},
	{
		value: 'NONE',
		label: __('None'),
	},
];
