import { useCallback } from 'react';

import { useRelations } from '@eventespresso/services';
import { hasTempId } from '@eventespresso/predicates';
import type { DatetimeMutationCallbackFn, DatetimeMutationCallbackFnArgs } from '../types';

const useOnUpdateDatetime = (): DatetimeMutationCallbackFn => {
	const { addRelation, removeRelation, updateRelations } = useRelations();

	const onUpdateDatetime = useCallback(
		({ datetime, tickets }: DatetimeMutationCallbackFnArgs): void => {
			if (hasTempId(datetime)) {
				return;
			}
			const datetimeId = datetime?.id;
			// if related tickets are passed
			// may be empty array to remove relations
			if (tickets) {
				// make sure to remove datetime from
				// all existing relations
				removeRelation({
					entity: 'datetimes',
					entityId: datetimeId,
					relation: 'tickets',
				});

				// if we have any tickets
				if (tickets.length) {
					updateRelations({
						entity: 'datetimes',
						entityId: datetimeId,
						relation: 'tickets',
						relationIds: tickets,
					});

					tickets.forEach((entityId) => {
						addRelation({
							entity: 'tickets',
							entityId,
							relation: 'datetimes',
							relationId: datetimeId,
						});
					});
				}
			}
		},
		[addRelation, removeRelation, updateRelations]
	);

	return onUpdateDatetime;
};

export default useOnUpdateDatetime;
