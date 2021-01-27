import type { User } from '@eventespresso/data';
import type { GeneralSettings, RelationalData } from '@eventespresso/services';
import type { DatetimeEdge, TicketEdge, PriceEdge, PriceTypeEdge, Event, EventManager } from './apollo';

export interface EventEditorData {
	event?: Event;
	eventManagers?: Array<EventManager>;
	datetimes?: DatetimeEdge;
	tickets?: TicketEdge;
	prices?: PriceEdge;
	priceTypes?: PriceTypeEdge;
	relations?: RelationalData;
}

export interface EditorData {
	eventEditor: EventEditorData;
	currentUser?: User;
	generalSettings?: GeneralSettings;
}

export interface EventEditorDomData {
	eventEditor: EventEditorData;
}

export enum EdtrGlobalModals {
	DEFAULT_TICKETS = 'defaultTickets',
	EDIT_DATE = 'editDate',
	EDIT_TICKET = 'editTicket',
	NEW_DATE = 'newDate',
	TAM = 'tam',
	TPC = 'tpc',
}
