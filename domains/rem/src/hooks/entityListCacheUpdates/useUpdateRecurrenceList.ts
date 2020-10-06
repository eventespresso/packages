import { useMemo } from 'react';

import { RecurrencesList, useRecurrenceQueryOptions } from '../../services/apollo';
import { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';
import { useUpdateEntityList } from '@eventespresso/edtr-services';

const useUpdateRecurrenceList = (
	writeQueryOptions: WriteQueryOptions<RecurrencesList> = undefined
): CacheUpdaterFn<RecurrencesList> => {
	const queryOptions = useRecurrenceQueryOptions();
	const options = useMemo(
		() => ({
			...queryOptions,
			...writeQueryOptions,
		}),
		[queryOptions, writeQueryOptions]
	);
	return useUpdateEntityList<RecurrencesList>(options);
};

export default useUpdateRecurrenceList;
