import type { CurrentUserProps, GeneralSettings, RelationalData } from '@eventespresso/services';
import type { DatetimeEdge, TicketEdge, PriceEdge, PriceTypeEdge, Event } from './apollo';

export interface EventEditorData {
	event?: Event;
	datetimes?: DatetimeEdge;
	tickets?: TicketEdge;
	prices?: PriceEdge;
	priceTypes?: PriceTypeEdge;
	relations?: RelationalData;
}

export interface EditorData {
	eventEditor: EventEditorData;
	currentUser?: CurrentUserProps;
	generalSettings?: GeneralSettings;
}

export interface EventEditorDomData {
	eventEditor: EventEditorData;
}
