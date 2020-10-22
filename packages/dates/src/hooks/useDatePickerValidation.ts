import { useMemo } from 'react';
import { isOnOrAfterToday, isOnOrAfterDate, isOnOrBeforeDate, isToday } from '../utils';
import type { UseDatePickerValidation } from '../utils/types';

export const useDatePickerValidation: UseDatePickerValidation = (startDate, endDate, considerTime) => {
	const endDateAfterStartDate = isOnOrAfterDate(endDate, startDate, considerTime);
	const endDateAfterToday = isOnOrAfterToday(endDate, considerTime);
	const endDateIsToday = isToday(endDate);
	const endDateIsValid = endDateAfterStartDate && endDateAfterToday;

	const startDateBeforeEndDate = isOnOrBeforeDate(startDate, endDate, considerTime);
	const startDateAfterToday = isOnOrAfterToday(startDate, considerTime);
	const startDateIsToday = isToday(startDate);
	const startDateIsValid = startDateBeforeEndDate && startDateAfterToday;

	return useMemo(() => {
		return {
			startDateIsValid,
			startDateIsToday,
			startDateAfterToday,
			startDateBeforeEndDate,
			endDateIsValid,
			endDateIsToday,
			endDateAfterToday,
			endDateAfterStartDate,
		};
	}, [
		endDateAfterStartDate,
		endDateAfterToday,
		endDateIsToday,
		endDateIsValid,
		startDateAfterToday,
		startDateBeforeEndDate,
		startDateIsToday,
		startDateIsValid,
	]);
};
