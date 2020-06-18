import { parseISO } from 'date-fns';

import { diff, isBooleanTrue } from '@eventespresso/services';
import { NOW as now } from '@eventespresso/constants';
import { Ticket } from '@eventespresso/edtr-services';

const isExpired = (ticket: Ticket): boolean =>
	isBooleanTrue(ticket.isExpired) || diff('minutes', parseISO(ticket.endDate), now) < 0;

export default isExpired;
