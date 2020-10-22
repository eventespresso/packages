import { useEffect } from 'react';
import { useCacheQuery } from '@eventespresso/data';
import useEventQueryOptions from './useEventQueryOptions';
import { useMemoStringify } from '@eventespresso/hooks';

import type { Event, EventData } from '../../types';

const useEvent = (): Event => {
	const options = useEventQueryOptions();

	const { data } = useCacheQuery<EventData>(options);
	useEffect(() => {
		console.log({ data });
	}, [data]);

	return useMemoStringify(data?.espressoEvent);
};

export default useEvent;
