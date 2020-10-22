import { useEvent, useFetchDatetimes, useFetchPriceTypes, useFetchPrices, useFetchTickets } from '../queries';
import { useFetchCurrentUser, useFetchGeneralSettings } from '@eventespresso/data';
import useCacheRehydration from './useCacheRehydration';

const useInitQueries = (): void => {
	useCacheRehydration();

	// initiate datetime fetching.
	useFetchDatetimes();

	// initiate ticket fetching.
	useFetchTickets();

	// initiate price type fetching.
	useFetchPriceTypes();

	// initiate price fetching.
	useFetchPrices();

	// initiate current user fetching.
	useFetchCurrentUser();

	// initiate general settings fetching.
	useFetchGeneralSettings();

	// iniate event data fetching
	useEvent();
};

export default useInitQueries;
