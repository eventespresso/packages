import { useCallback } from 'react';

import { parsedAmount, toBoolean, useRelations } from '@eventespresso/services';
import { copyTicketFields, isTicketInputField } from '@eventespresso/predicates';
import { useDataState } from '../data';
import { shouldUpdateTicket } from '../utils';
import { useTicketMutator } from '@eventespresso/edtr-services';
import { useTicketItem } from '@eventespresso/edtr-services';
import useMutatePrices from './useMutatePrices';

const useOnSubmitPrices = (): (() => Promise<void>) => {
	const { deletedPrices: deletedPriceIds, prices, ticket } = useDataState();

	const { updateEntity: updateTicket } = useTicketMutator();
	const existingTicket = useTicketItem({ id: ticket.id });
	const { getRelations } = useRelations();
	const mutatePrices = useMutatePrices();

	// Async to make sure that prices are handled before updating the ticket.
	return useCallback(async () => {
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
	}, [deletedPriceIds, existingTicket, getRelations, mutatePrices, prices, ticket, updateTicket]);
};

export default useOnSubmitPrices;
