import { useCallback } from 'react';

import { copyTicketFields, isTicketInputField } from '@eventespresso/predicates';
import { parsedAmount, toBoolean } from '@eventespresso/utils';
import { RemTicket, useMutatePrices, useTicketMutator } from '@eventespresso/edtr-services';
import type { EntityId } from '@eventespresso/data';

type Callback = (ticket: RemTicket) => Promise<EntityId>;

const useMutateTicket = (): Callback => {
	const { createEntity: createTicket } = useTicketMutator();
	const mutatePrices = useMutatePrices();

	// Async to make sure that prices are handled before updating the ticket.
	return useCallback(
		async (ticket) => {
			// mutate prices before mutating ticket
			const relatedPriceIds = await mutatePrices(ticket?.prices || []);

			// prepare ticket mutation input
			const normalizedTicketFields = {
				...copyTicketFields(ticket, isTicketInputField),
				price: parsedAmount(ticket.price || 0),
				reverseCalculate: toBoolean(ticket.reverseCalculate),
			};

			// create ticket and wait for the promise to resolve
			const result = await createTicket({ ...normalizedTicketFields, prices: relatedPriceIds });

			const ticketId = result?.data?.createEspressoTicket?.espressoTicket?.id;

			return ticketId;
		},
		[createTicket, mutatePrices]
	);
};

export default useMutateTicket;
