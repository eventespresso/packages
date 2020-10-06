import { useCallback } from 'react';

import useUpdateRecurrenceCache from './useUpdateRecurrenceCache';
import type { RecurrenceMutationCallbackFn, RecurrenceMutationCallbackFnArgs } from '../types';
import { useRelations } from '@eventespresso/services';

const useOnDeleteRecurrence = (): RecurrenceMutationCallbackFn => {
	const { dropRelations, removeRelation } = useRelations();

	const updateRecurrenceCache = useUpdateRecurrenceCache();

	const onDeleteRecurrence = useCallback(
		({ cache, recurrences, recurrence }: RecurrenceMutationCallbackFnArgs): void => {
			const action = 'remove';
			if (recurrence.id) {
				const { id: recurrenceId } = recurrence;

				// Remove the recurrence from all datetime relations
				removeRelation({
					entity: 'recurrences',
					entityId: recurrenceId,
					relation: 'datetimes',
				});
				// Drop all the relations for the recurrence
				dropRelations({
					entity: 'recurrences',
					entityId: recurrenceId,
				});
			}
			// Update recurrence cache after price cache is updated.
			updateRecurrenceCache({ cache, recurrences, recurrence, action });
		},
		[dropRelations, removeRelation, updateRecurrenceCache]
	);

	return onDeleteRecurrence;
};

export default useOnDeleteRecurrence;
