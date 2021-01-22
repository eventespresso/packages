import { useCallback } from 'react';

import {
	useDatetimeMutator,
	useTicketQuantityForCapacity,
	useUpdateRelatedTickets,
	useDatetimeItem,
} from '@eventespresso/edtr-services';
import type { EntityId } from '@eventespresso/data';
import { wait } from '@eventespresso/utils';

import { OnSubmit } from './types';

const useOnSubmit = (entityId: EntityId, onClose: VoidFunction): OnSubmit => {
	const { createEntity, updateEntity } = useDatetimeMutator();
	const datetime = useDatetimeItem({ id: entityId });

	const updateRelatedTickets = useUpdateRelatedTickets(entityId);
	const ticketQuantityForCapacity = useTicketQuantityForCapacity();

	const onSubmit = useCallback(
		async (fields) => {
			// wait the next event cycle to fire up isLoading for submit button
			await wait();

			onClose();
			// If it's an existing entity
			if (entityId) {
				// Update it
				await updateEntity(fields);

				// whether date capacity has been changed
				const capacityChanged = fields?.capacity !== datetime?.capacity;
				// if true, we need to update the quantity of all the related tickets
				if (capacityChanged) {
					const inputGenerator = ticketQuantityForCapacity(fields?.capacity);
					updateRelatedTickets(inputGenerator, fields?.tickets);
				}
			} else {
				// otherwise create it
				await createEntity(fields);
			}
		},
		[
			createEntity,
			datetime?.capacity,
			entityId,
			onClose,
			ticketQuantityForCapacity,
			updateEntity,
			updateRelatedTickets,
		]
	);

	return onSubmit;
};

export default useOnSubmit;
