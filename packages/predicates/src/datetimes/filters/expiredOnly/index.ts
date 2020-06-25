import { isExpired } from '../../../common/isExpired';
import type { DatetimeFilterFn } from '../types';

const expiredOnly: DatetimeFilterFn = (dates) => {
	return dates.filter((date) => isExpired(date));
};

export default expiredOnly;
