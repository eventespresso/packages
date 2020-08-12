import { useContext } from 'react';
import invariant from 'invariant';

import { FilterStateManager } from './types';
import { FilterStateContext } from '../../context';

const useFilterState = (): FilterStateManager => {
	const value = useContext(FilterStateContext);

	invariant(value, 'useFilterState must be used inside TAM <FilterStateProvider> component');

	return value;
};

export default useFilterState;
