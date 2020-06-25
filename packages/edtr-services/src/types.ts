
import type { CurrentUserProps, GeneralSettings, JsDataProps, RelationalData } from '@eventespresso/services';
import type { DatetimeEdge, TicketEdge, PriceEdge, PriceTypeEdge } from './apollo';

export interface EventDomData {
	dbId: number;
	datetimes?: DatetimeEdge;
	tickets?: TicketEdge;
	prices?: PriceEdge;
	priceTypes?: PriceTypeEdge;
	relations?: RelationalData;
}

export interface EEEditorData {
	assetsUrl?: string;
	event: EventDomData;
	graphqlEndpoint?: string;
	currentUser?: CurrentUserProps;
	generalSettings?: GeneralSettings;
	i18n?: any;
}

export interface EEJSData {
	data: JsDataProps;
}

declare global {
	interface Window {
		eeEditorData: EEEditorData;
		eejsdata: EEJSData;
		eeDomain: string;
	}
}
