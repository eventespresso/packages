import { useCacheRehydration } from '../services/apollo';
import useAddActionsFilters from './useAddActionsFilters';

const useWpUserInitialization = (): void => {
	// Fire initial queries
	useCacheRehydration();

	useAddActionsFilters();
};

export default useWpUserInitialization;
