import { useCallback } from 'react';

import type { RecurrenceMutationCallbackFn, RecurrenceMutationCallbackFnArgs } from '../types';
import { useRelations } from '@eventespresso/services';

const useOnUpdateRecurrence = (): RecurrenceMutationCallbackFn => {
	const { addRelation, removeRelation, updateRelations } = useRelations();

	const onUpdateRecurrence = useCallback(
		({ recurrence, datetimeIds }: RecurrenceMutationCallbackFnArgs): void => {
			if (recurrence.id && datetimeIds && datetimeIds.length) {
				const { id: recurrenceId } = recurrence;

				// make sure to remove recurrence from
				// all existing relations
				removeRelation({
					entity: 'recurrences',
					entityId: recurrenceId,
					relation: 'datetimes',
				});

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
		},
		[addRelation, removeRelation, updateRelations]
	);

	return onUpdateRecurrence;
};

export default useOnUpdateRecurrence;
