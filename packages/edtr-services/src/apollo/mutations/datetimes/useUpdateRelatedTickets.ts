import { useCallback } from 'react';

import type { EntityId } from '@eventespresso/data';
import type { Ticket } from '../../';
import { useRelatedTickets, useTickets } from '../../queries/tickets';
import { useTicketMutator, UpdateTicketInput } from '../tickets';
import { entitiesWithGuIdInArray } from '@eventespresso/predicates';

type InputGenerator = (ticket: Ticket) => UpdateTicketInput;
type UpdateCallback = (
	datetimeId: EntityId,
	inputGenerator: InputGenerator,
	relatedTicketIds?: Array<EntityId>
) => void;

const useUpdateRelatedTickets = (): UpdateCallback => {
	const tickets = useTickets();
	const getRelatedTickets = useRelatedTickets();
	const { updateEntity } = useTicketMutator();

	return useCallback<UpdateCallback>(
		(datetimeId, generateInput, relatedTicketIds = []) => {
			const prevRelatedTickets = getRelatedTickets({ entity: 'datetimes', entityId: datetimeId });
			/**
			 * As of now, TAM can't be submitted without a date being related to a ticket
			 * So, if this function is called after submission of multi-step and
			 * `relatedTicketIds` is not empty, it means that related tickets were changed in TAM.
			 * So, we will only update `quantity` for the assigned tickets if needed
			 *
			 * Otherwise if `relatedTicketIds` is empty, it means that ticket assignments remained
			 * unchanged in multi-step or date capacity was changed using inline edit input
			 */
			const ticketsToUpdate = relatedTicketIds?.length
				? entitiesWithGuIdInArray(tickets, relatedTicketIds)
				: prevRelatedTickets;

			ticketsToUpdate.forEach((ticket) => {
				const input = generateInput(ticket);
				updateEntity({ id: ticket.id, ...input });
			});
		},
		[getRelatedTickets, tickets, updateEntity]
	);
};

export default useUpdateRelatedTickets;
