import { useCallback } from 'react';

import { useTicketPrices } from '@eventespresso/edtr-services';
import { isTicketInputField, copyTicketFields } from '@eventespresso/predicates';
import { useRelations } from '@eventespresso/services';
import { Ticket } from '@eventespresso/edtr-services';
import { useMutateTicket, usePrepTemplatePrices } from '@eventespresso/tpc';

const useCopyTicket = (ticket: Ticket): (() => Promise<void>) => {
	const getTicketPrices = useTicketPrices();
	const { getRelations } = useRelations();
	const prepTemplatePrices = usePrepTemplatePrices();

	const mutateTicket = useMutateTicket();

	return useCallback(async () => {
		const prices = prepTemplatePrices(getTicketPrices(ticket?.id), false);

		// get the related datetime ids
		const datetimes = getRelations({
			entity: 'tickets',
			entityId: ticket.id,
			relation: 'datetimes',
		});

		const newTicket = copyTicketFields(ticket, isTicketInputField);

		// add datetimes and prices to mutation input
		const input = { ...newTicket, prices, datetimes, sold: 0, isNew: true };

		// now finally create the ticket
		await mutateTicket(input);
	}, [getRelations, getTicketPrices, mutateTicket, prepTemplatePrices, ticket]);
};

export default useCopyTicket;
