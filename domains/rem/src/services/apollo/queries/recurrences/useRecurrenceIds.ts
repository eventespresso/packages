import { EntityId } from '@eventespresso/data';
import { getGuids } from '@eventespresso/predicates';
import { useMemoStringify } from '@eventespresso/hooks';

import useRecurrences from './useRecurrences';

const useRecurrenceIds = (): Array<EntityId> => {
	const recurrences = useRecurrences();

	return useMemoStringify(getGuids(recurrences));
};

export default useRecurrenceIds;
