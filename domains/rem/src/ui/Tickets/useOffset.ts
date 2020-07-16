import { useMemo } from 'react';
import {
	differenceInMinutes,
	differenceInHours,
	differenceInDays,
	differenceInMonths,
	isAfter,
	parseISO,
} from 'date-fns';
import { __ } from '@wordpress/i18n';

import { Offset, OffsetProps } from './types';

const useOffset = ({ datetime, ticket }: OffsetProps): Offset => {
	const datetimeStartDate = parseISO(datetime.startDate);
	const datetimeEndDate = parseISO(datetime.endDate);

	const ticketStartDate = parseISO(ticket.startDate);
	const ticketEndDate = parseISO(ticket.endDate);

	const isTicketStartAfter = isAfter(ticketStartDate, datetimeStartDate);
	const isTicketEndAfter = isAfter(ticketEndDate, datetimeEndDate);

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

		if (minutes < 59) {
			return hours;
		}

		if (hours < 24) {
			return hours;
		}

		if (days < 30) {
			return days;
		}

		return Math.abs(ticketStartDifferenceInMonths);
	}, [
		ticketStartDifferenceInDays,
		ticketStartDifferenceInHours,
		ticketStartDifferenceInMinutes,
		ticketStartDifferenceInMonths,
	]);

	const startPosition = isTicketStartAfter ? __('after') : __('before');

	const startUnit = useMemo(() => {
		const minutes = Math.abs(ticketStartDifferenceInMinutes);
		const hours = Math.abs(ticketStartDifferenceInHours);
		const days = Math.abs(ticketStartDifferenceInDays);

		if (minutes < 59) {
			return __('minutes');
		}

		if (hours < 24) {
			return __('hours');
		}

		if (days < 30) {
			return __('days');
		}

		return __('months');
	}, [ticketStartDifferenceInDays, ticketStartDifferenceInHours, ticketStartDifferenceInMinutes]);

	const endDuration = useMemo(() => {
		const minutes = Math.abs(ticketEndDifferenceInMinutes);
		const hours = Math.abs(ticketEndDifferenceInHours);
		const days = Math.abs(ticketEndDifferenceInDays);

		if (minutes < 59) {
			return minutes;
		}

		if (hours < 24) {
			return hours;
		}

		if (days < 30) {
			return days;
		}

		return Math.abs(ticketEndDifferenceInMonths);
	}, [
		ticketEndDifferenceInDays,
		ticketEndDifferenceInHours,
		ticketEndDifferenceInMinutes,
		ticketEndDifferenceInMonths,
	]);

	const endPosition = isTicketEndAfter ? __('after') : __('before');

	const endUnit = useMemo(() => {
		const minutes = Math.abs(ticketEndDifferenceInMinutes);
		const hours = Math.abs(ticketEndDifferenceInHours);
		const days = Math.abs(ticketEndDifferenceInDays);

		if (minutes < 59) {
			return __('minutes');
		}

		if (hours < 24) {
			return __('hours');
		}

		if (days < 30) {
			return __('days');
		}

		return __('months');
	}, [ticketEndDifferenceInDays, ticketEndDifferenceInHours, ticketEndDifferenceInMinutes]);

	return useMemo(
		() => ({
			startDuration,
			startUnit,
			startPosition,
			endDuration,
			endUnit,
			endPosition,
		}),
		[endDuration, endPosition, endUnit, startDuration, startPosition, startUnit]
	);
};

export default useOffset;
