import { useCallback } from 'react';

import { copyTicketFields, isTicketInputField, findEntityByGuid } from '@eventespresso/predicates';
import { parsedAmount, toBoolean } from '@eventespresso/utils';
import { useRelations } from '@eventespresso/services';
import { TPCDataState, useTicketMutator, useTickets } from '../../';
import useMutatePrices from './useMutatePrices';
import { shouldUpdateTicket } from '../utils';

type Callback = (dataState: TPCDataState) => Promise<void>;

const useOnSubmitPrices = (): Callback => {
	const { updateEntity: updateTicket } = useTicketMutator();
	const allTickets = useTickets();
	const { getRelations } = useRelations();
	const mutatePrices = useMutatePrices();

	// Async to make sure that prices are handled before updating the ticket.
	return useCallback<Callback>(
		async ({ deletedPrices: deletedPriceIds, prices, ticket }) => {
			const getTicketyId = findEntityByGuid(allTickets);
			const existingTicket = getTicketyId(ticket.id);

			const relatedPriceIds = await mutatePrices(prices, deletedPriceIds);

			const normalizedTicketFields = {
				...copyTicketFields(ticket, isTicketInputField),
				id: ticket.id,
				price: parsedAmount(ticket.price || 0),
				reverseCalculate: toBoolean(ticket.reverseCalculate),
			};
			// Finally update the ticket and its price relation, if needed
			const ticketNeedsUpdate = shouldUpdateTicket({
				existingTicket,
				getRelations,
				newTicket: ticket,
				relatedPriceIds,
			});
			if (ticketNeedsUpdate) {
				updateTicket({ ...normalizedTicketFields, prices: relatedPriceIds });
			}
		},
		[allTickets, getRelations, mutatePrices, updateTicket]
	);
};

export default useOnSubmitPrices;
