import useRecurrences from './useRecurrences';
import { EntityId } from '@eventespresso/data';
import { getGuids } from '@eventespresso/predicates';

const useRecurrenceIds = (): EntityId[] => {
	const recurrences = useRecurrences();

	return getGuids(recurrences);
};

export default useRecurrenceIds;
