import { useDatetimes } from '@eventespresso/edtr-services';
import { useFilterState } from '../filters';
import { isTrashed, inYearAndMonth } from '@eventespresso/predicates';

const useFilteredDatetimes = () => {
	const { showTrashedDates, datesByMonth } = useFilterState();

	const datesInYearAndMonth = inYearAndMonth(datesByMonth);

	const allDates = useDatetimes();

	// If the year i.e. datesByMonth[0] is set, then filter
	const datetimes = datesByMonth[0] ? datesInYearAndMonth(allDates) : allDates;

	if (showTrashedDates) {
		return datetimes;
	}

	return datetimes.filter((datetime) => !isTrashed(datetime));
};

export default useFilteredDatetimes;
