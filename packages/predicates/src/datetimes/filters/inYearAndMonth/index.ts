import isInMonth from '../../isInMonth';
import isInYear from '../../isInYear';
import type { Datetime } from '@eventespresso/edtr-services';
import { DatetimeFilterFn } from '../types';

type InYearAndMonth = (yearMonth: [number, number]) => DatetimeFilterFn;

const inYearAndMonth: InYearAndMonth = ([year, month]) => (dates: Array<Datetime>): Array<Datetime> => {
	const datesInYear = dates.filter((date) => isInYear(date, year));

	const datesInMonth = datesInYear.filter((date) => isInMonth(date, month));

	return datesInMonth;
};

export default inYearAndMonth;
