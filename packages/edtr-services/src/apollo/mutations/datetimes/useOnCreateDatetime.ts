import { useCallback } from 'react';

import updateTicketCache from './updateTicketCache';
import useUpdateDatetimeCache from './useUpdateDatetimeCache';
import type { DatetimeMutationCallbackFn, DatetimeMutationCallbackFnArgs } from '../types';
import { useRelations } from '@eventespresso/services';
import { getGuids, hasTempId } from '@eventespresso/predicates';

const useOnCreateDatetime = (): DatetimeMutationCallbackFn => {
	const { updateRelations, addRelation } = useRelations();

	const updateDatetimeCache = useUpdateDatetimeCache();

	const onCreateDatetime = useCallback(
		({ cache, datetimes, datetime, tickets }: DatetimeMutationCallbackFnArgs): void => {
			if (!hasTempId(datetime)) {
				const { nodes = [] } = datetimes;
				const datetimeIn = getGuids(nodes).sort();
				const { id: datetimeId } = datetime;

				// Update tickets cache for the changed datetimes,
				// to avoid refetching of tickets.
				updateTicketCache({ cache, datetimeIn, datetimeId, action: 'add' });

				// if we have related tickets
				if (tickets?.length) {
					updateRelations({
						entity: 'datetimes',
						entityId: datetimeId,
						relation: 'tickets',
						relationIds: tickets,
					});
					tickets.forEach((entityId: string) => {
						addRelation({
							entity: 'tickets',
							entityId,
							relation: 'datetimes',
							relationId: datetimeId,
						});
					});
				}
			}
			// Update datetime cache after tickets cache is updated.
			updateDatetimeCache({ cache, datetimes, datetime, action: 'add' });
		},
		[addRelation, updateDatetimeCache, updateRelations]
	);

	return onCreateDatetime;
};

export default useOnCreateDatetime;
