import { useCallback } from 'react';

import updateTicketCache from './updateTicketCache';
import useUpdateDatetimeCache from './useUpdateDatetimeCache';
import type { DatetimeMutationCallbackFn, DatetimeMutationCallbackFnArgs } from '../types';
import { useRelations } from '@eventespresso/services';
import { getGuids, hasTempId } from '@eventespresso/predicates';

const useOnDeleteDatetime = (): DatetimeMutationCallbackFn => {
	const { dropRelations, removeRelation } = useRelations();

	const updateDatetimeCache = useUpdateDatetimeCache();

	const onDeleteDatetime = useCallback(
		({ cache, datetimes, datetime, deletePermanently }: DatetimeMutationCallbackFnArgs): void => {
			const action = deletePermanently ? 'remove' : 'update';
			if (!hasTempId(datetime) && deletePermanently) {
				const { nodes = [] } = datetimes;
				const datetimeIn = getGuids(nodes);
				const { id: datetimeId } = datetime;

				// Update tickets cache for the changed datetimes,
				// to avoid refetching of tickets.
				updateTicketCache({ cache, datetimeIn, datetimeId, action });

				// Remove the datetime from all ticket relations
				removeRelation({
					entity: 'datetimes',
					entityId: datetimeId,
					relation: 'tickets',
				});
				// Drop all the relations for the datetime
				dropRelations({
					entity: 'datetimes',
					entityId: datetimeId,
				});
			}
			// Update datetime cache after tickets cache is updated.
			updateDatetimeCache({ cache, datetimes, datetime: { ...datetime, isTrashed: true }, action });
		},
		[dropRelations, removeRelation, updateDatetimeCache]
	);

	return onDeleteDatetime;
};

export default useOnDeleteDatetime;
