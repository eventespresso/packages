import { useCallback } from 'react';

import type { StateInitializer } from './types';
import { Datetime } from '@eventespresso/edtr-services';
import { useDateRecurrence } from '../apollo/queries/datetimes';

/**
 * Initializes the data state dynamically.
 */
const useInitialState = (datetime: Datetime): StateInitializer => {
	const recurrence = useDateRecurrence(datetime.id);
	return useCallback<StateInitializer>(
		(initialState) => {
			// `recurrence` contains the pattern and other details
			return { ...initialState, ...recurrence };
		},
		[recurrence]
	);
};

export default useInitialState;
