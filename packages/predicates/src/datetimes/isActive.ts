import { parseISO } from 'date-fns';

import { Datetime } from '@eventespresso/edtr-services';
import { diff, isBooleanTrue } from '@eventespresso/services';
import { NOW as now } from '@eventespresso/constants';

const isActive = (date: Datetime): boolean =>
	isBooleanTrue(date.isActive) ||
	(diff('seconds', parseISO(date.startDate), now) < 0 && diff('seconds', parseISO(date.endDate), now) > 0);

export default isActive;
