import { useCallback, useMemo } from 'react';

import { useCacheQuery } from '@eventespresso/data';
import useEventQueryOptions from './useEventQueryOptions';
import { useSystemNotifications } from '@eventespresso/toaster';
import { useMemoStringify } from '@eventespresso/hooks';

import type { Event, EventData } from '../../types';

const useEvent = (): Event => {
	const options = useEventQueryOptions();
	const toaster = useSystemNotifications();

	const onError = useCallback(
		(error): void => {
			toaster.error({ message: error.message });
		},
		[toaster]
	);

	const queryOptions = useMemo(
		() => ({
			...options,
			fetchPolicy: 'cache-first' as const,
			// only display error, not loading or success
			onError,
		}),
		[onError, options]
	);

	const { data } = useCacheQuery<EventData>(queryOptions);

	return useMemoStringify(data?.espressoEvent);
};

export default useEvent;
