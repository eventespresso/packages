import { parseISO } from 'date-fns';

import type { Datetime } from '@eventespresso/edtr-services';
import { diff, isBooleanTrue } from '@eventespresso/services';
import { NOW as now } from '@eventespresso/constants';

const isUpcoming = (date: Datetime): boolean =>
	isBooleanTrue(date.isUpcoming) || diff('seconds', parseISO(date.startDate), now) > 0;

export default isUpcoming;
