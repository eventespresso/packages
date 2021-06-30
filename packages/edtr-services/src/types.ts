import type { OptionsType } from '@eventespresso/adapters';
import type { User } from '@eventespresso/data';
import type { GeneralSettings, RelationalData } from '@eventespresso/services';
import type { FormSectionRaw, FormElementRaw } from '@eventespresso/form-builder';
import type { DatetimeEdge, TicketEdge, PriceEdge, PriceTypeEdge, Event, EventManager } from './apollo';

export type TicketMeta = {
	visibilityOptions: OptionsType;
};

export type EdtrFormBuilderData = {
	sections: Array<FormSectionRaw>;
	elements: Array<FormElementRaw>;
	topLevelSectionId?: string;
};

export interface EventEditorData {
	event?: Event;
	eventManagers?: Array<EventManager>;
	datetimes?: DatetimeEdge;
	formBuilder?: EdtrFormBuilderData;
	tickets?: TicketEdge;
	ticketMeta?: TicketMeta;
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
