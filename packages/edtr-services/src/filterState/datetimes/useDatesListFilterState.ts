import { useContext } from 'react';
import invariant from 'invariant';

import { DatesFilterStateContext } from '../../context';
import type { DatetimesFilterStateManager } from './types';

const useDatesListFilterState = (): DatetimesFilterStateManager => {
	const value = useContext(DatesFilterStateContext);

	invariant(value, 'useDatesListFilterState must be used inside <DatesFilterStateProvider> component');

	return value;
};
export default useDatesListFilterState;
