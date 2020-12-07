import { useCacheRehydration } from '../services/apollo';

const useWpUserInitialization = (): void => {
	// Fire initial queries
	useCacheRehydration();
};

export default useWpUserInitialization;
