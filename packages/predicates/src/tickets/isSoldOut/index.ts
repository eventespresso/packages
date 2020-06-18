import { isBooleanTrue } from '@eventespresso/services';
import { Ticket } from '@eventespresso/edtr-services';

const isSoldOut = (ticket: Ticket): boolean =>
	isBooleanTrue(ticket.isSoldOut) ||
	(isFinite(ticket.quantity) && ticket.quantity > -1 && ticket.quantity <= ticket.sold);

export default isSoldOut;
