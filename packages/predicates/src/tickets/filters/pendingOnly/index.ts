import isPending from '../../isPending';
import type { TicketFilterFn } from '../types';

const pendingOnly: TicketFilterFn = (tickets) => {
	return tickets.filter(isPending);
};

export default pendingOnly;
