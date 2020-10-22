import type { EntityId } from '@eventespresso/data';
import type { Event } from '../../';

export interface EventBaseInput {
	maxRegistrations?: number;
	allowOverflow?: boolean;
	description?: string;
	displayDescription?: boolean;
	displayTicketSelector?: boolean;
	allowDonations?: boolean;
	altRegPage?: string;
	memberOnly?: boolean;
	name?: string;
	order?: number;
	phoneNumber?: string;
	shortDescription?: string;
	timezonestring?: string;
	visibleOn?: string;
	wpUser?: number;
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
