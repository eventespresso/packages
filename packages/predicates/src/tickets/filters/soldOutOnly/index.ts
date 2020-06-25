import { filterFn } from '../percentSoldAtOrAbove';
import type { TicketFilterFn } from '../types';

const soldOutOnly: TicketFilterFn = (tickets) => {
	return tickets.filter((ticket) => {
		return ticket.isSoldOut || filterFn({ percentage: 100, ticket });
	});
};

export default soldOutOnly;
