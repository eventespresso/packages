import { useInitQueries } from '../services/apollo';
import { useRegisterRecurrenceFilter } from '../services/filters';

const useRemInitialization = (): void => {
	// register recurrence filter using hook.
	useRegisterRecurrenceFilter();

	// Fire initial queries
	useInitQueries();
};

export default useRemInitialization;
