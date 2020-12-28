import { useCacheRehydration } from '../services/apollo';
import { useRegisterRecurrenceFilter } from '../services/filters';
import useDatesBulkEditAction from './useDatesBulkEditAction';
import useDatesBulkEditActions from './useDatesBulkEditActions';

const useRemInitialization = (): void => {
	// register recurrence filter using hook.
	useRegisterRecurrenceFilter();

	useDatesBulkEditActions();
	useDatesBulkEditAction();

	// Fire initial queries
	useCacheRehydration();
};

export default useRemInitialization;
