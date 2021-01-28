import { useCallback } from 'react';

import useMutateTicket from './useMutateTicket';
import { DataState } from '../data';

type Callback = (dataState: DataState) => Promise<void>;

const useOnSubmitPrices = (): Callback => {
	const mutateTicket = useMutateTicket();

	// Async to make sure that prices are handled before updating the ticket.
	return useCallback<Callback>(
		async ({ deletedPrices, prices, ticket }) => {
			const input = {
				...ticket,
				prices,
				deletedPrices,
				isModified: Boolean(ticket.id),
			};

			await mutateTicket(input);
		},
		[mutateTicket]
	);
};

export default useOnSubmitPrices;
