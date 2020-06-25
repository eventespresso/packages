import isActive from '../../isActive';

import type { DatetimeFilterFn } from '../types';

const activeOnly: DatetimeFilterFn = (dates) => {
	return dates.filter((date) => isActive(date));
};

export default activeOnly;
