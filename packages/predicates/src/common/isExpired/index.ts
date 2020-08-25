import { parseISO } from 'date-fns';

import type { Ticket, Datetime } from '@eventespresso/edtr-services';
import { diff, isBooleanTrue } from '@eventespresso/utils';
import { NOW as now } from '@eventespresso/constants';

export const isExpired = (entity: Ticket | Datetime): boolean =>
	isBooleanTrue(entity.isExpired) || diff('minutes', parseISO(entity.endDate), now) < 0;
