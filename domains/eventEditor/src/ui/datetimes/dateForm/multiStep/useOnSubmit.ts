import { useCallback } from 'react';

import {
	useDatetimeMutator,
	useTicketQuantityForCapacity,
	useUpdateRelatedTickets,
	useDatetimeItem,
} from '@eventespresso/edtr-services';
import type { EntityId } from '@eventespresso/data';

import { OnSubmit } from './types';

const useOnSubmit = (entityId: EntityId, onClose: VoidFunction): OnSubmit => {
	const { createEntity, updateEntity } = useDatetimeMutator();
	const datetime = useDatetimeItem({ id: entityId });

	const updateRelatedTickets = useUpdateRelatedTickets(entityId);
	const ticketQuantityForCapacity = useTicketQuantityForCapacity();

	const onSubmit = useCallback(
		(fields) => {
			// If it's an existing entity
			if (entityId) {
				// Update it
				updateEntity(fields);

				// whether date capacity has been changed
				const capacityChanged = fields?.capacity !== datetime?.capacity;
				// if true, we need to update the quantity of all the related tickets
				if (capacityChanged) {
					const inputGenerator = ticketQuantityForCapacity(fields?.capacity);
					updateRelatedTickets(inputGenerator, fields?.tickets);
				}
			} else {
				// otherwise create it
				createEntity(fields);
			}
			onClose();
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
