import { isTrashed, isExpired } from '@eventespresso/predicates';
import { useFilterState } from '../filters';
import { useTickets } from '@eventespresso/edtr-services';

const useFilteredTickets = () => {
	const { showExpiredTickets, showTrashedTickets } = useFilterState();
	let tickets = useTickets();

	if (!showExpiredTickets) {
		tickets = tickets.filter((ticket) => !isExpired(ticket));
	}

	if (!showTrashedTickets) {
		tickets = tickets.filter((ticket) => !isTrashed(ticket));
	}

	return tickets;
};

export default useFilteredTickets;
