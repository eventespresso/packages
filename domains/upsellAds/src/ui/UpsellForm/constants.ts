import { EdtrSlots } from '@eventespresso/services';

export const containerClassOptions = [
	{
		label: 'White Background, Black Text',
		value: '',
	},
	{
		label: 'Yellow Left Strip, White Background',
		value: 'notice-warning',
	},
	{
		label: 'Blue Left Strip, White Background',
		value: 'notice-info',
	},
	{
		label: 'Green Left Strip, White Background',
		value: 'notice-success',
	},
	{
		label: 'Red Left Strip, White Background',
		value: 'notice-error',
	},
	{
		label: 'Pink Background, White Text',
		value: 'white pink-bg',
	},
	{
		label: 'Green Background, White Text',
		value: 'white green-bg',
	},
	{
		label: 'Dark Green Background, White Text',
		value: 'white drk-green-bg',
	},
	{
		label: 'Red Background, White Text',
		value: 'white red-bg',
	},
	{
		label: 'Orange Background, White Text',
		value: 'white orange-bg',
	},
	{
		label: 'Light Blue Background, Black Text',
		value: 'black lt-blue-bg',
	},
	{
		label: 'Blue Background, White Text',
		value: 'white blue-bg',
	},
	{
		label: 'Yellow Background, Black Text',
		value: 'black yellow-bg',
	},
	{
		label: 'Light Grey Background, Black Text',
		value: 'black lt-grey-bg',
	},
	{
		label: 'Grey Background, Black Text',
		value: 'black grey-bg',
	},
	{
		label: 'Dark Grey Background, White Text',
		value: 'white drk-grey-bg',
	},
	{
		label: 'Black Background, White Text',
		value: 'white black-bg',
	},
];

export const templates = [
	{
		label: 'Base',
		value: 'base',
	},
	{
		label: 'Compact',
		value: 'compact',
	},
	{
		label: 'With background images',
		value: 'with-bg-image',
	},
	{
		label: 'With options',
		value: 'with-options',
	},
];

export const eventEditorLocationOptions = [
	{
		label: '...',
		value: '',
	},
	{
		label: 'Add Single Date Option',
		value: EdtrSlots.ADD_SINGLE_DATE_OPTION,
	},
	{
		label: 'Add Recurring Date Option',
		value: EdtrSlots.ADD_RECURRING_DATE_OPTION,
	},
	{
		label: 'Below the Dates list heading',
		value: EdtrSlots.BELOW_DATES_LIST_HEADING,
	},
	{
		label: 'Below the Dates list buttons',
		value: EdtrSlots.BELOW_DATES_LIST_BUTTONS,
	},
	{
		label: 'Below the Tickets list heading',
		value: EdtrSlots.BELOW_TICKETS_LIST_HEADING,
	},
	{
		label: 'Below the Tickets list buttons',
		value: EdtrSlots.BELOW_TICKETS_LIST_BUTTONS,
	},
	{
		label: 'Edit date modal footer',
		value: EdtrSlots.EDIT_DATE_MODAL_FOOTER,
	},
	{
		label: 'Edit ticket modal footer',
		value: EdtrSlots.EDIT_TICKET_MODAL_FOOTER,
	},
	{
		label: 'REM modal footer',
		value: EdtrSlots.REM_MODAL_FOOTER,
	},
];
