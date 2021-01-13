import type { Entity, User } from '@eventespresso/data';
import type { GeneralSettings, RelationalData } from '@eventespresso/services';
import type { IntervalType } from '@eventespresso/dates';
import type {
	DatetimeEdge,
	TicketEdge,
	PriceEdge,
	PriceTypeEdge,
	Event,
	EventManager,
	UpdateTicketInput,
} from './apollo';
import type { TpcPriceModifier } from './context/tpc';

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

export interface RemTicket extends Entity, RemTicketFields, Omit<UpdateTicketInput, 'prices' | 'id'> {
	prices?: Array<TpcPriceModifier>;
	isShared: boolean;
}

export type TicketSatesFields = {
	position?: 'before' | 'after';
	startOrEnd?: 'start' | 'end';
	unit?: IntervalType;
	unitValue?: number;
};

export type TicketSalesDates = {
	startDate: string | Date;
	endDate: string | Date;
};

export interface TicketCardProps {
	onCopy?: VoidFunction;
	onTrash?: VoidFunction;
	ticket: RemTicket;
}

export interface RemTicketFields extends Partial<TicketSatesFields>, Partial<TicketSalesDates> {
	ticketSalesDates?: TicketSalesDates;
	ticketSalesStart?: TicketSatesFields;
	ticketSalesEnd?: TicketSatesFields;
	isShared?: boolean;
}
