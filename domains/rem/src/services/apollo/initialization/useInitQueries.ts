import { useFetchRecurrences } from '../queries';
import useCacheRehydration from './useCacheRehydration';

const useInitQueries = (): void => {
	useCacheRehydration();

	// initiate datetime fetching.
	useFetchRecurrences();
};

export default useInitQueries;
