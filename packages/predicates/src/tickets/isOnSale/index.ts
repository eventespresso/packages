import { parseISO } from 'date-fns';

import { diff, isBooleanTrue } from '@eventespresso/services';
import {NOW as now } from '@eventespresso/constants';
import { Ticket } from '@eventespresso/edtr-services';

const isOnSale = (ticket: Ticket): boolean =>
	isBooleanTrue(ticket.isOnSale) ||
	(diff('minutes', parseISO(ticket.startDate), now) < 0 && diff('minutes', parseISO(ticket.endDate), now) > 0);

export default isOnSale;
