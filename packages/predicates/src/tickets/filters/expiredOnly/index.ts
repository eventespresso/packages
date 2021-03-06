import { isExpired } from '../../../common/isExpired';
import type { TicketFilterFn } from '../types';

const expiredOnly: TicketFilterFn = (tickets) => tickets.filter((ticket) => isExpired(ticket));

export default expiredOnly;
