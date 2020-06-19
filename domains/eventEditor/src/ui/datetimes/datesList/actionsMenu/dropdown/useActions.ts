import { useCallback, useMemo } from 'react';
import { pick } from 'ramda';

import { isTrashed } from '@eventespresso/predicates';
import { useDatetimeItem, useDatetimeMutator, useEventId } from '@eventespresso/edtr-services';
import { useRelations } from '@eventespresso/services';

const useActions = ({ datetimeId }) => {
	// Make sure to subscribe to Apollo cache
	// to avoid stale data
	const datetime = useDatetimeItem({ id: datetimeId });

	const eventId = useEventId();

	const { id, cacheId } = datetime;

	const { createEntity, deleteEntity } = useDatetimeMutator(id);

	const { getRelations } = useRelations();

	const tickets = getRelations({
		entity: 'datetimes',
		entityId: datetime.id,
		relation: 'tickets',
	});

	const copyDate = useCallback(() => {
		const newDatetime = pick(
			['capacity', 'description', 'endDate', 'isPrimary', 'name', 'order', 'reserved', 'sold', 'startDate'],
			datetime
		);

		return createEntity({ ...newDatetime, eventId, tickets });
	}, [createEntity, datetime, eventId, tickets]);

	const trashed = useMemo(() => isTrashed(datetime), [datetime]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const trashDate = useCallback(() => deleteEntity({ id, deletePermanently: trashed }), [cacheId, trashed]);

	return useMemo(
		() => ({
			copyDate,
			trashDate,
			trashed,
		}),
		[copyDate, trashDate, trashed]
	);
};

export default useActions;
