import type { EntityId } from '@eventespresso/data';
import type { Event } from '../../';

export interface EventBaseInput {
	additionalLimit?: number;
	allowOverflow?: boolean;
	description?: string;
	displayDescription?: boolean;
	displayTicketSelector?: boolean;
	donations?: boolean;
	externalUrl?: string;
	memberOnly?: boolean;
	menuOrder?: number;
	name?: string;
	order?: number;
	phone?: string;
	shortDescription?: string;
	timezonestring?: string;
	visibleOn?: string;
}

export interface UpdateEventInput extends EventBaseInput {
	id?: EntityId;
}

export type EventMutationResult = {
	espressoEvent: Event;
};

export type UpdateEventResult = {
	updateEspressoEvent: EventMutationResult;
};
