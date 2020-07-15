import { RecurrencesList, useRecurrenceQueryOptions } from '../../services/apollo';
import { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';
import { useUpdateEntityList } from '@eventespresso/edtr-services';

const useUpdateRecurrenceList = (
	writeQueryOptions: WriteQueryOptions<RecurrencesList> = undefined
): CacheUpdaterFn<RecurrencesList> => {
	const queryOptions = useRecurrenceQueryOptions();
	return useUpdateEntityList<RecurrencesList>({
		...queryOptions,
		...writeQueryOptions,
	});
};

export default useUpdateRecurrenceList;
