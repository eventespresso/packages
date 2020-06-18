import { Event, EventData } from '../../types';
import { useCacheQuery } from '@eventespresso/data';
import useEventQueryOptions from './useEventQueryOptions';
import { useSystemNotifications } from '@eventespresso/services';

const useEvent = (): Event => {
	const options = useEventQueryOptions();
	const toaster = useSystemNotifications();

	const { data } = useCacheQuery<EventData>({
		...options,
		fetchPolicy: 'cache-first',
		// only display error, not loading or success
		onError: (error): void => {
			toaster.error({ message: error.message });
		},
	});

	return data?.espressoEvent;
};

export default useEvent;
