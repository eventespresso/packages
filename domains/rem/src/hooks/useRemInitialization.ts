import { useCacheRehydration } from '../services/apollo';
import { useRegisterRecurrenceFilter } from '../services/filters';
import useDatesBulkEditActions from './useDatesBulkEditActions';

const useRemInitialization = (): void => {
	// register recurrence filter using hook.
	useRegisterRecurrenceFilter();

	useDatesBulkEditActions();

	// Fire initial queries
	useCacheRehydration();
};

export default useRemInitialization;
