import { entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { useRelations } from '@eventespresso/services';
import { EntityId } from '@eventespresso/data';
import { useRecurrences } from '../recurrences';
import type { Recurrence } from '../../types';
import { useMemoStringify } from '@eventespresso/hooks';

/**
 * Returns recurrence for the given date, if it's a recurring one
 * otherwise returns `undefined`
 */
const useDateRecurrence = (datetimeId: EntityId): Recurrence => {
	const recurrences = useRecurrences();
	const { getRelations } = useRelations();
	const relatedRecurrenceIds = getRelations({
		entity: 'datetimes',
		entityId: datetimeId,
		relation: 'recurrences',
	});

	// should be the only recurrence in the list
	const [relatedRecurrence] = entitiesWithGuIdInArray(recurrences, relatedRecurrenceIds);

	return useMemoStringify(relatedRecurrence);
};

export default useDateRecurrence;
