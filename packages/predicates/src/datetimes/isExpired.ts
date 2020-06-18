import { parseISO } from 'date-fns';

import { Datetime } from '@eventespresso/edtr-services';
import { diff, isBooleanTrue } from '@eventespresso/services';
import { NOW as now } from '@eventespresso/constants';

const isExpired = (date: Datetime): boolean =>
	isBooleanTrue(date.isExpired) || diff('seconds', parseISO(date.endDate), now) < 0;

export default isExpired;
