import type { EntityMetaMap } from '@eventespresso/services';

export type TicketsMeta = EntityMetaMap;

export type CapabilityOptions = {
	[optgroup: string]: {
		[capability: string]: string; // label
	};
};

export interface WpUserData {
	capabilityOptions?: CapabilityOptions;
	ticketsMeta?: TicketsMeta;
}
