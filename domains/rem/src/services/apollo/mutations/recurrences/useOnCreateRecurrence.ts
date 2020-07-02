import { useCallback } from 'react';

import useUpdateRecurrenceCache from './useUpdateRecurrenceCache';
import type { RecurrenceMutationCallbackFn, RecurrenceMutationCallbackFnArgs } from '../types';
import { useRelations } from '@eventespresso/services';

const useOnCreateRecurrence = (): RecurrenceMutationCallbackFn => {
	const { addRelation, updateRelations } = useRelations();

	const updateRecurrenceCache = useUpdateRecurrenceCache();

	const onCreateRecurrence = useCallback(
		({ proxy, datetimeIds, recurrence, recurrences }: RecurrenceMutationCallbackFnArgs): void => {
			if (recurrence.id) {
				const { id: recurrenceId } = recurrence;

				// Set relations with datetimes
				updateRelations({
					entity: 'recurrences',
					entityId: recurrenceId,
					relation: 'datetimes',
					relationIds: datetimeIds,
				});
				datetimeIds.forEach((entityId: string) => {
					addRelation({
						entity: 'datetimes',
						entityId,
						relation: 'recurrences',
						relationId: recurrenceId,
					});
				});
			}
			// Update recurrence cache.
			updateRecurrenceCache({ proxy, recurrences, recurrence, action: 'add' });
		},
		[addRelation, updateRelations, updateRecurrenceCache]
	);

	return onCreateRecurrence;
};

export default useOnCreateRecurrence;
