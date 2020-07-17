import { useMemo } from 'react';
import { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, parseISO } from 'date-fns';
import { __, _n } from '@wordpress/i18n';

import { Offset, OffsetProps } from './types';

const useOffset = ({ datetime, ticket }: OffsetProps): Offset => {
	const datetimeStartDate = parseISO(datetime.startDate);
	const datetimeEndDate = parseISO(datetime.endDate);

	const ticketStartDate = parseISO(ticket.startDate);
	const ticketEndDate = parseISO(ticket.endDate);

	const ticketStartDifferenceInMinutes = differenceInMinutes(ticketStartDate, datetimeStartDate);
	const ticketStartDifferenceInHours = differenceInHours(ticketStartDate, datetimeStartDate);
	const ticketStartDifferenceInDays = differenceInDays(ticketStartDate, datetimeStartDate);
	const ticketStartDifferenceInMonths = differenceInMonths(ticketStartDate, datetimeStartDate);

	const ticketEndDifferenceInMinutes = differenceInMinutes(ticketEndDate, datetimeEndDate);
	const ticketEndDifferenceInHours = differenceInHours(ticketEndDate, datetimeEndDate);
	const ticketEndDifferenceInDays = differenceInDays(ticketEndDate, datetimeEndDate);
	const ticketEndDifferenceInMonths = differenceInMonths(ticketEndDate, datetimeEndDate);

	const startDuration = useMemo(() => {
		const minutes = Math.abs(ticketStartDifferenceInMinutes);
		const hours = Math.abs(ticketStartDifferenceInHours);
		const days = Math.abs(ticketStartDifferenceInDays);
		const months = Math.abs(ticketStartDifferenceInMonths);

		if (minutes < 59) {
			return minutes;
		}

		if (hours < 24) {
			return hours;
		}

		if (days < 30) {
			return days;
		}

		return months;
	}, [
		ticketStartDifferenceInDays,
		ticketStartDifferenceInHours,
		ticketStartDifferenceInMinutes,
		ticketStartDifferenceInMonths,
	]);

	const startUnit = useMemo(() => {
		const minutes = Math.abs(ticketStartDifferenceInMinutes);
		const hours = Math.abs(ticketStartDifferenceInHours);
		const days = Math.abs(ticketStartDifferenceInDays);
		const months = Math.abs(ticketStartDifferenceInMonths);

		if (minutes < 59) {
			return _n(__('minute'), __('minutes'), minutes);
		}

		if (hours < 24) {
			return _n(__('hour'), __('hours'), hours);
		}

		if (days < 30) {
			return _n(__('day'), __('days'), days);
		}

		return _n(__('month'), __('months'), months);
	}, [
		ticketStartDifferenceInDays,
		ticketStartDifferenceInHours,
		ticketStartDifferenceInMinutes,
		ticketStartDifferenceInMonths,
	]);

	const endDuration = useMemo(() => {
		const minutes = Math.abs(ticketEndDifferenceInMinutes);
		const hours = Math.abs(ticketEndDifferenceInHours);
		const days = Math.abs(ticketEndDifferenceInDays);
		const months = Math.abs(ticketEndDifferenceInMonths);

		if (minutes < 59) {
			return minutes;
		}

		if (hours < 24) {
			return hours;
		}

		if (days < 30) {
			return days;
		}

		return months;
	}, [
		ticketEndDifferenceInDays,
		ticketEndDifferenceInHours,
		ticketEndDifferenceInMinutes,
		ticketEndDifferenceInMonths,
	]);

	const endUnit = useMemo(() => {
		const minutes = Math.abs(ticketEndDifferenceInMinutes);
		const hours = Math.abs(ticketEndDifferenceInHours);
		const days = Math.abs(ticketEndDifferenceInDays);
		const months = Math.abs(ticketEndDifferenceInMonths);

		if (minutes < 59) {
			return _n(__('minute'), __('minutes'), minutes);
		}

		if (hours < 24) {
			return _n(__('hour'), __('hours'), hours);
		}

		if (days < 30) {
			return _n(__('day'), __('days'), days);
		}

		return _n(__('month'), __('months'), months);
	}, [
		ticketEndDifferenceInDays,
		ticketEndDifferenceInHours,
		ticketEndDifferenceInMinutes,
		ticketEndDifferenceInMonths,
	]);

	return useMemo(
		() => ({
			startDuration,
			startUnit,
			endDuration,
			endUnit,
		}),
		[endDuration, endUnit, startDuration, startUnit]
	);
};

export default useOffset;
