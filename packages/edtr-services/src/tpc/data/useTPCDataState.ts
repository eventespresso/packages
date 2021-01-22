import { useContext } from 'react';
import invariant from 'invariant';

import { TPCDataStateContext } from '../context/TPCDataStateProvider';
import type { TPCDataStateManager } from './types';

const useTPCDataState = (): TPCDataStateManager => {
	const value = useContext(TPCDataStateContext);

	invariant(value, 'useTPCDataState must be used inside TPC <TPCDataStateProvider> component');

	return value;
};

export default useTPCDataState;
