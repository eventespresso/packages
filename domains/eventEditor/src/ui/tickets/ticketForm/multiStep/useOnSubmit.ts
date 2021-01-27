import { useCallback } from 'react';

import { useTicketMutator, hooks } from '@eventespresso/edtr-services';
import { useMutatePrices } from '@eventespresso/tpc';
import type { EntityId } from '@eventespresso/data';
import { wait } from '@eventespresso/utils';

import useCapQuantity from '@edtrUI/tickets/hooks/useCapQuantity';
import { OnSubmit } from './types';

const useOnSubmit = (ticketId: EntityId, onClose: VoidFunction): OnSubmit => {
	const { createEntity, updateEntity } = useTicketMutator();
	const mutatePrices = useMutatePrices();

	const mutateTicket = useCallback(
		(input) => {
			const finalInput = hooks.applyFilters('eventEditor.ticketForm.mutationInput', input, ticketId);
			return ticketId ? updateEntity(finalInput) : createEntity(finalInput);
		},
		[createEntity, ticketId, updateEntity]
	);

	const getCappedQuantity = useCapQuantity();
	const onSubmit = useCallback(
		async ({ prices, deletedPrices, ...fields }) => {
			// wait the next event cycle to fire up isLoading for submit button
			await wait();
			// close the modal
			onClose();

			// mutate prices
			const relatedPriceIds = await mutatePrices(prices, deletedPrices);
			//  get the capped quantity for ticket based on the related date(s)
			const quantity = getCappedQuantity(fields.datetimes, fields.quantity);

			const input = { ...fields, prices: relatedPriceIds, quantity };

			await mutateTicket(input);
		},
		[getCappedQuantity, mutatePrices, mutateTicket, onClose]
	);

	return onSubmit;
};

export default useOnSubmit;
