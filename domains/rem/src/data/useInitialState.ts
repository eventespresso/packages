import { useCallback } from 'react';

import type { StateInitializer } from './types';

/**
 * Initializes the data state dynamically.
 */
const useInitialState = (): StateInitializer => {
	return useCallback<StateInitializer>((initialState) => {
		return initialState;
	}, []);
};

export default useInitialState;
