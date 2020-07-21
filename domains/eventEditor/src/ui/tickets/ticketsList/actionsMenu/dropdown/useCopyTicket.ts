import { useCallback } from 'react';

import { useTicketPrices, useTicketMutator } from '@eventespresso/edtr-services';
import { isTicketInputField, copyTicketFields, isDefaultTax } from '@eventespresso/predicates';
import { useRelations } from '@eventespresso/services';
import { Ticket } from '@eventespresso/edtr-services';
import { useMutatePrices, usePriceToTpcModifier } from '@eventespresso/tpc';

const useCopyTicket = (ticket: Ticket): VoidFunction => {
	const relatedPrices = useTicketPrices(ticket?.id);
	const { createEntity } = useTicketMutator();
	const { getRelations } = useRelations();
	const convertPriceToTpcModifier = usePriceToTpcModifier();
	const mutatePrices = useMutatePrices();

	return useCallback(() => {
		const prices = relatedPrices.map((price) => {
			const priceModifier = convertPriceToTpcModifier(price);
			// if it's a default tax
			if (isDefaultTax(price)) {
				// return without cloning
				return priceModifier;
			}
			return {
				...priceModifier,
				// clone it
				isNew: true,
				// avoid default price getting duplicated
				isDefault: false,
			};
		});

		// get the related datetime ids
		const datetimes = getRelations({
			entity: 'tickets',
			entityId: ticket.id,
			relation: 'datetimes',
		});

		const newTicket = copyTicketFields(ticket, isTicketInputField);

		// create the prices
		mutatePrices(prices).then((relatedPriceIds) => {
			// add related prices and datetimes to mutation input
			const input = { ...newTicket, prices: relatedPriceIds, datetimes };
			// now finally create the ticket
			createEntity(input);
		});
	}, [convertPriceToTpcModifier, createEntity, getRelations, mutatePrices, relatedPrices, ticket]);
};

export default useCopyTicket;
