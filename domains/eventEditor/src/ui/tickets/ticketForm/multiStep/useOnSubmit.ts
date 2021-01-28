import { useCallback } from 'react';

import { useMutateTicket } from '@eventespresso/tpc';
import { wait } from '@eventespresso/utils';

import useCapQuantity from '@edtrUI/tickets/hooks/useCapQuantity';
import { OnSubmit } from './types';

const useOnSubmit = (onClose: VoidFunction): OnSubmit => {
	const mutateTicket = useMutateTicket();

	const getCappedQuantity = useCapQuantity();
	const onSubmit = useCallback(
		async (fields) => {
			// wait the next event cycle to fire up isLoading for submit button
			await wait();
			// close the modal
			onClose();
			//  get the capped quantity for ticket based on the related date(s)
			const quantity = getCappedQuantity(fields.datetimes, fields.quantity);

			const input = {
				...fields,
				isModified: Boolean(fields.id), // should be updated if there is an id
				isNew: !fields.id, // it's new if id is empty
				quantity,
			};

			await mutateTicket(input);
		},
		[getCappedQuantity, mutateTicket, onClose]
	);

	return onSubmit;
};

export default useOnSubmit;
