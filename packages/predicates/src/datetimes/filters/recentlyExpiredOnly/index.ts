import { Datetime } from '@eventespresso/edtr-services';
import isRecentlyExpired from '../../isRecentlyExpired';
import { DatetimeFilterFn } from '../types';

const recentlyExpiredOnly: DatetimeFilterFn = (dates) => {
	const filterFn = (date: Datetime): boolean => {
		return isRecentlyExpired(date) && !date.isTrashed;
	};

	return dates.filter(filterFn);
};

export default recentlyExpiredOnly;
