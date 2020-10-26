import { useCacheRehydration } from '../services/apollo';
import { useRegisterRecurrenceFilter } from '../services/filters';

const useRemInitialization = (): void => {
	// register recurrence filter using hook.
	useRegisterRecurrenceFilter();

	// Fire initial queries
	useCacheRehydration();
};

export default useRemInitialization;
