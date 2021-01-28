import { useCallback } from 'react';

import { copyTicketFields, isTicketInputField } from '@eventespresso/predicates';
import type { Entity, EntityId } from '@eventespresso/data';
import { UpdateTicketInput, useTicketMutator, TicketMutationResult, hooks } from '@eventespresso/edtr-services';

import useMutatePrices from './useMutatePrices';
import { TpcPriceModifier } from '../types';

interface TicketData extends Partial<Entity>, Omit<UpdateTicketInput, 'prices' | 'id'> {
	deletedPrices?: Array<EntityId>;
	isModified?: boolean;
	isNew?: boolean;
	prices?: Array<TpcPriceModifier>;
}

type Callback = (ticket: TicketData) => Promise<EntityId>;

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
				prices: relatedPriceIds,
			};

			const mutationInput = hooks.applyFilters(
				'eventEditor.ticket.mutationInput',
				normalizedTicketFields,
				ticket.id
			);

			let mutationResult: TicketMutationResult;

			if (isNew) {
				const result = await createTicket(mutationInput);
				mutationResult = result?.data?.createEspressoTicket;
			} else if (isModified) {
				// update only if modified
				const result = await updateTicket({ ...mutationInput, id: ticket.id });
				mutationResult = result?.data?.updateEspressoTicket;
			}

			return mutationResult?.espressoTicket?.id;
		},
		[createTicket, mutatePrices, updateTicket]
	);
};

export default useMutateTicket;
