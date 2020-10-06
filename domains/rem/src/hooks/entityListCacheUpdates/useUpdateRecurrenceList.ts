import { useMemo } from 'react';

import type { CacheUpdaterFn, WriteQueryOptions } from '@eventespresso/data';
import { useUpdateEntityList } from '@eventespresso/edtr-services';

import { useRecurrenceQueryOptions } from '../../services/apollo';
import type { RecurrencesList } from '../../services/apollo';

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
