import { useContext } from 'react';
import invariant from 'invariant';

import { TicketsFilterStateContext } from '../../context';
import type { TicketsFilterStateManager } from './types';

const useTicketsListFilterState = (): TicketsFilterStateManager => {
	const value = useContext(TicketsFilterStateContext);

	invariant(value, 'useTicketsListFilterState must be used inside <TicketsFilterStateProvider> component');

	return value;
};
export default useTicketsListFilterState;
