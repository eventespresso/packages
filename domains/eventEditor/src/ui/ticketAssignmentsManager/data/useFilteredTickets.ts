import { useMemo } from 'react';

import { isTrashed, isExpired } from '@eventespresso/predicates';
import type { Ticket } from '@eventespresso/edtr-services';
import { useFilterState } from '../filters';

const useFilteredTickets = (allTickets: Array<Ticket>): Array<Ticket> => {
	const { showExpiredTickets, showTrashedTickets } = useFilterState();

	return useMemo(() => {
		let tickets = allTickets;
		if (!showExpiredTickets) {
			tickets = tickets.filter((ticket) => !isExpired(ticket));
		}

		if (!showTrashedTickets) {
			tickets = tickets.filter((ticket) => !isTrashed(ticket));
		}

		return tickets;
	}, [allTickets, showExpiredTickets, showTrashedTickets]);
};

export default useFilteredTickets;
