import type { Entity, User } from '@eventespresso/data';
import type { GeneralSettings, RelationalData } from '@eventespresso/services';
import type { IntervalType, SalesDates } from '@eventespresso/dates';
import type { DatetimeEdge, TicketEdge, PriceEdge, PriceTypeEdge, Event, EventManager } from './apollo';
import type { TPCPriceModifier } from './tpc';
import type { UpdateTicketInput } from './';

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
	EDIT_DATE = 'editDate',
	EDIT_TICKET = 'editTicket',
	NEW_DATE = 'newDate',
	TAM = 'tam',
	TPC = 'tpc',
}

export type TicketSatesFields = {
	position?: 'before' | 'after';
	startOrEnd?: 'start' | 'end';
	unit?: IntervalType;
	unitValue?: number;
};

export interface RemTicketFields extends Partial<TicketSatesFields>, Partial<SalesDates> {
	ticketSalesDates?: SalesDates;
	ticketSalesStart?: TicketSatesFields;
	ticketSalesEnd?: TicketSatesFields;
	isShared?: boolean;
}

export interface RemTicket extends Entity, RemTicketFields, Omit<UpdateTicketInput, 'prices' | 'id'> {
	prices?: Array<TPCPriceModifier>;
	isShared: boolean;
}
