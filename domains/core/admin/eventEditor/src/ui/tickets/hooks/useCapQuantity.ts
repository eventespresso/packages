import { useCallback } from 'react';
import { EntityId } from '@eventespresso/data';
import { useDatetimes, useTickets } from '@eventespresso/edtr-services';
import { ticketsWithNewQuantity, EntitiesToUpdate } from '@edtrUI/ticketAssignmentsManager/utils';
import { useRelations } from '@eventespresso/services';
import { Ticket } from '@eventespresso/edtr-services';

type Callback = (relatedDateIds: Array<EntityId>, quantity: number) => number;

/**
 * Returns a callback to get the quantity cap for a ticket
 * based on the related dates capacity
 */
const useCapQuantity = (ticketId?: EntityId): Callback => {
	const allDates = useDatetimes();
	const allTickets = useTickets();
	const { getData: getExistingData } = useRelations();

	return useCallback<Callback>(
		(relatedDateIds, quantity) => {
			if (!relatedDateIds?.length) {
				return quantity;
			}
			const existingData = getExistingData();

			const id = ticketId ? ticketId : 'NEW_TICKET';
			// we only need id and quantity to be able to use below logic
			const newTicket = { id, quantity } as Ticket;

			// if there is no id, it's a new ticket
			const newAllTickets = ticketId ? allTickets : [...allTickets, newTicket];

			const ticketsToUpdate: EntitiesToUpdate = [
				[
					id,
					{
						datetimes: relatedDateIds,
					},
				],
			];

			const ticketsWithChangedQuantity = ticketsWithNewQuantity({
				allDates,
				allTickets: newAllTickets,
				existingData,
				ticketsToUpdate,
			});
			return ticketsWithChangedQuantity?.[id] || quantity;
		},
		[allDates, allTickets, getExistingData, ticketId]
	);
};

export default useCapQuantity;
