import { useContext } from 'react';
import invariant from 'invariant';

import { FilteredTicketsContext } from '../../context';
import type { Ticket } from '../../apollo';

const useFilteredTickets = (): Array<Ticket> => {
	const value = useContext(FilteredTicketsContext);

	invariant(value, 'useFilteredTickets must be used inside <FilteredTicketsProvider> component');

	return value;
};
export default useFilteredTickets;
