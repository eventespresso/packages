import { is } from 'ramda';
import type { Datetime } from '@eventespresso/edtr-services';

import { DatetimeFilterFn } from '../types';

const allDates: DatetimeFilterFn = (dates) => {
	const withoutTrashed = ({ isTrashed }: Datetime): boolean => {
		return is(Boolean, isTrashed) && !isTrashed;
	};

	return dates.filter(withoutTrashed);
};

export default allDates;
