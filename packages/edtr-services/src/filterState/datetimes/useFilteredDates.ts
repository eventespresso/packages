import { useContext } from 'react';
import invariant from 'invariant';

import { FilteredDatesContext } from '../../context';
import type { Datetime } from '../../apollo';

const useFilteredDates = (): Array<Datetime> => {
	const value = useContext(FilteredDatesContext);

	invariant(value, 'useFilteredDates must be used inside <FilteredDatesProvider> component');

	return value;
};
export default useFilteredDates;
