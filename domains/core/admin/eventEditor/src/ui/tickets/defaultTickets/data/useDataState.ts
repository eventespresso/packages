import { useContext } from 'react';
import invariant from 'invariant';

import { DataStateContext } from '../context';
import type { DataStateManager } from './types';

const useDataState = (): DataStateManager => {
	const state = useContext(DataStateContext);

	invariant(state, 'useDataState must be used inside DataStateProvider');

	return state;
};

export default useDataState;
