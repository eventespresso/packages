import { useInitQueries } from '../services/apollo';

const useRemInitialization = (): void => {
	// Fire initial queries
	useInitQueries();
};

export default useRemInitialization;
