import { useCallback } from 'react';

import { useTicketMutator, useTicketPrices, useBulkDeletePrices } from '@eventespresso/edtr-services';
import { parsedAmount, toBoolean } from '@eventespresso/utils';
import { useDataState, useMutatePrices } from '@eventespresso/tpc';
import { isNotDefault, getGuids } from '@eventespresso/predicates';
import { useBulkEdit } from '@eventespresso/services';

const useOnSubmitPrices = (onClose: VoidFunction): (() => Promise<void>) => {
	const { prices, ticket } = useDataState();
	const { getSelected } = useBulkEdit();

	const { updateEntity: updateTicket } = useTicketMutator();
	const mutatePrices = useMutatePrices();

	// prices related to all the selected tickets
	const relatedPrices = useTicketPrices(getSelected());

	const deletePrices = useBulkDeletePrices();

	// prices may contain default taxes,
	// we need to make sure they are not deleted.
	const nonDefaultPrices = relatedPrices.filter(isNotDefault);

	// Async to make sure that prices are handled before updating the ticket.
	return useCallback(async () => {
		// lower down the curtains
		onClose();
		// delete all non-default prices
		await deletePrices(getGuids(nonDefaultPrices));

		// tickets/prices can be mutated in parallel
		await Promise.all(
			// loop through all the selected tickets and update thei price information
			getSelected().map(async (ticketId) => {
				// create/update prices and collect their ids
				const relatedPriceIds = await mutatePrices(prices);

				// Finally update the ticket and its price relation
				await updateTicket({
					id: ticketId,
					price: parsedAmount(ticket.price || 0),
					reverseCalculate: toBoolean(ticket.reverseCalculate),
					isTaxable: toBoolean(ticket.isTaxable),
					prices: relatedPriceIds,
				});
			})
		);
	}, [deletePrices, getSelected, mutatePrices, nonDefaultPrices, onClose, prices, ticket, updateTicket]);
};

export default useOnSubmitPrices;
