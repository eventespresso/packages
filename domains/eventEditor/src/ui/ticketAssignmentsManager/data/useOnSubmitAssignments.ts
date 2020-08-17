import { useCallback } from 'react';
import { any } from 'ramda';

import { useRelations } from '@eventespresso/services';
import { UpdateTicketInput, useDatetimes, useTickets, useBulkEditTickets } from '@eventespresso/edtr-services';
import { entityHasGuid } from '@eventespresso/predicates';
import { prepareEntitiesForUpdate, ticketsWithNewQuantity } from '../utils';
import { TAMRelationalData } from '../types';

type Callback = (data: TAMRelationalData) => Promise<void>;

const useOnSubmitAssignments = (): Callback => {
	const { getData: getExistingData } = useRelations();

	const allDates = useDatetimes();
	const allTickets = useTickets();

	const { updateEntities: bulkEditTickets } = useBulkEditTickets();

	return useCallback<Callback>(
		async (data) => {
			const existingData = getExistingData();

			const ticketsToUpdate = prepareEntitiesForUpdate({
				entity: 'tickets',
				existingData,
				newData: data,
				relation: 'datetimes',
			});

			const ticketsWithChangedQuantity = ticketsWithNewQuantity({
				allDates,
				allTickets,
				existingData,
				ticketsToUpdate,
			});

			const uniqueInputs = ticketsToUpdate.map<UpdateTicketInput>(([id, possibleRelation]) => {
				const input = { id, datetimes: possibleRelation?.datetimes };

				const quantity = ticketsWithChangedQuantity?.[id];
				if (quantity) {
					return { ...input, quantity };
				}
				return input;
			});
			Object.entries(ticketsWithChangedQuantity).forEach(([id, quantity]) => {
				// if it's already in uniqueInputs
				if (any<UpdateTicketInput>(entityHasGuid(id), uniqueInputs)) {
					return;
				}
				uniqueInputs.push({ id, quantity });
			});
			bulkEditTickets({ uniqueInputs });
		},
		[allDates, allTickets, bulkEditTickets, getExistingData]
	);
};

export default useOnSubmitAssignments;
