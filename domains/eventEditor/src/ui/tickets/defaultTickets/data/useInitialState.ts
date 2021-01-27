import { useCallback, useMemo } from 'react';

import { useDefaultTickets } from '@eventespresso/edtr-services';
import { idToEntityMap } from '@eventespresso/predicates';

import type { StateInitializer } from './types';

/**
 * Initializes the data state dynamically.
 */
const useInitialState = (): StateInitializer => {
	const defaultTickets = useDefaultTickets();
	const normalizedTickets = useMemo(() => defaultTickets.map((ticket) => ({ ...ticket, prices: [] })), [
		defaultTickets,
	]);

	return useCallback<StateInitializer>(
		(initialState) => {
			const tickets = idToEntityMap(normalizedTickets);
			return { ...initialState, tickets };
		},
		[normalizedTickets]
	);
};

export default useInitialState;
