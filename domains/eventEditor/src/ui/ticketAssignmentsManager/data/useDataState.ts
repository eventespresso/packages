import { useContext } from 'react';
import invariant from 'invariant';

import { DataStateManager } from '../types';
import { DataStateContext } from '../context';

const useDataState = (): DataStateManager => {
	const value = useContext(DataStateContext);

	invariant(value, 'useDataState must be used inside TAM <DataStateProvider> component');

	return value;
};

export default useDataState;
