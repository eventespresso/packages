import { parseISO } from 'date-fns';

import { isBooleanTrue } from '@eventespresso/utils';
import { diff } from '@eventespresso/dates';
import { NOW as now } from '@eventespresso/constants';
import type { Ticket } from '@eventespresso/edtr-services';

const isOnSale = (ticket: Ticket): boolean =>
	isBooleanTrue(ticket.isOnSale) ||
	(diff('minutes', parseISO(ticket.startDate), now) < 0 && diff('minutes', parseISO(ticket.endDate), now) > 0);

export default isOnSale;
