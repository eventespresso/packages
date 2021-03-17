import { useCallback } from 'react';

import {
	useDatetimeMutator,
	useTicketQuantityForCapacity,
	useUpdateRelatedTickets,
	useDatetimeItem,
} from '@eventespresso/edtr-services';
import type { EntityId } from '@eventespresso/data';
import { isInfinite, wait } from '@eventespresso/utils';

import { OnSubmit } from './types';

const useOnSubmit = (entityId: EntityId, onClose: VoidFunction): OnSubmit => {
	const { createEntity, updateEntity } = useDatetimeMutator();
	const datetime = useDatetimeItem({ id: entityId });

	const updateRelatedTickets = useUpdateRelatedTickets();
	const ticketQuantityForCapacity = useTicketQuantityForCapacity();

	const onSubmit = useCallback(
		async (fields) => {
			// wait the next event cycle to fire up isLoading for submit button
			await wait();

			// whether date capacity has been changed
			let capacityChanged = false;
			let id = entityId;

			onClose();
			// If it's an existing entity
			if (entityId) {
				// Update it
				await updateEntity(fields);

				capacityChanged = fields?.capacity !== datetime?.capacity;
			} else {
				// otherwise create it
				const result = await createEntity(fields);

				// Get the ID.
				id = result?.data?.createEspressoDatetime?.espressoDatetime?.id;

				// For new dates, capacity matters only if it's finite.
				capacityChanged = !isInfinite(fields?.capacity);
			}
			// if true, we need to update the quantity of all the related tickets
			if (capacityChanged && id) {
				const inputGenerator = ticketQuantityForCapacity(fields?.capacity);
				updateRelatedTickets(id, inputGenerator, fields?.tickets);
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
