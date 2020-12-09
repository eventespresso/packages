import { getHooks } from '@eventespresso/ioc';
import { MutationType, ApolloCache, Entity, EntityId } from '@eventespresso/data';
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
};
export type Filters = {
	'eventEditor.ticketForm.initalValues': [initialValues: TicketFormShape, ticket: Ticket];
	'eventEditor.ticketForm.sections': [sections: TicketFormConfig['sections'], ticket: Ticket];
	'eventEditor.ticketForm.mutationInput': [input: Record<string, any>, entityId?: EntityId];
};

export const hooks = getHooks<Actions, Filters>();
