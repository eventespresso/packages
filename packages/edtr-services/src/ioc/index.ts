import { getHooks } from '@eventespresso/ioc';
import type { MutationType, ApolloCache, Entity, EntityId } from '@eventespresso/data';
import type { OptionsType } from '@eventespresso/adapters';
import type { BulkEdit } from '@eventespresso/services';

import { Ticket } from '../apollo';
import { TicketFormShape, TicketFormConfig } from '../forms';

type MutationActionArgs<E extends Entity> = [
	mutationType: MutationType,
	input: Record<string, any>,
	entity: E,
	cache?: ApolloCache<any>
];

export type Actions = {
	'eventEditor.ticket.mutation': MutationActionArgs<Ticket>;
	'eventEditor.datetimes.bulkEdit.apply': [action: string, bulkEdit: BulkEdit];
};
export type Filters = {
	'eventEditor.ticketForm.initalValues': [initialValues: TicketFormShape, ticket: Ticket];
	'eventEditor.ticketForm.sections': [sections: TicketFormConfig['sections'], ticket: Ticket];
	'eventEditor.ticket.mutationInput': [input: Record<string, any>, entityId?: EntityId];
	'eventEditor.datetimes.bulkEdit.actions': [actions: OptionsType];
};

export const hooks = getHooks<Actions, Filters>();
