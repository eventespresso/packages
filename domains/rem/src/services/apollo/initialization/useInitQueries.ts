import { useFetchRecurrences } from '../queries';
import useCacheRehydration from './useCacheRehydration';

const useInitQueries = (): void => {
	const rehydrated = useCacheRehydration();

	// initiate datetime fetching.
	useFetchRecurrences({ skip: !rehydrated }); // skip until the cache has not been rehydrated
};

export default useInitQueries;
