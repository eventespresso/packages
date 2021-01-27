import { useCallback } from 'react';

import { copyTicketFields, isTicketInputField } from '@eventespresso/predicates';
import { parsedAmount, toBoolean } from '@eventespresso/utils';
import { useTicketMutator } from '@eventespresso/edtr-services';
import { useMutatePrices } from '@eventespresso/tpc';

import type { DefaultTicket } from './types';

type Callback = (ticket: DefaultTicket) => Promise<void>;

const useMutateTicket = (): Callback => {
	const { createEntity: createTicket, updateEntity: updateTicket } = useTicketMutator();
	const mutatePrices = useMutatePrices();

	// Async to make sure that prices are handled before updating the ticket.
	return useCallback(
		async ({ isNew, isModified, prices, deletedPrices, ...ticket }) => {
			// mutate prices before mutating ticket
			const relatedPriceIds = await mutatePrices(prices, deletedPrices);

			// prepare ticket mutation input
			const normalizedTicketFields = {
				...copyTicketFields(ticket, isTicketInputField),
				price: parsedAmount(ticket.price || 0),
				prices: relatedPriceIds,
				reverseCalculate: toBoolean(ticket.reverseCalculate),
			};

			if (isNew) {
				await createTicket(normalizedTicketFields);
			} else if (isModified) {
				// update only if modified
				await updateTicket({ ...normalizedTicketFields, id: ticket.id });
			}
		},
		[createTicket, mutatePrices, updateTicket]
	);
};

export default useMutateTicket;
