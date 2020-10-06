import { useCallback, useEffect, useMemo } from 'react';
import { last } from 'ramda';

import { copyDatetimeFields, isDatetimeInputField, sortDates } from '@eventespresso/predicates';
import { getSharedTickets, getNonSharedTickets, computeDatetimeEndDate } from '../utils';
import { useSiteDateToUtcISO } from '@eventespresso/services';
import type { GeneratedDate } from '../ui/generatedDates';
import type { FormState } from './types';
import { useDatetimeMutator, useDatetimes } from '@eventespresso/edtr-services';
import useMutateTickets from './useMutateTickets';
import useSaveRecurrence from './useSaveRecurrence';
import { useProgress } from '@eventespresso/hooks';

const initialProgress = { datetimes: 0, tickets: 0 };

const useSubmitForm = (formState: FormState, generatedDates: Array<GeneratedDate>): (() => Promise<void>) => {
	const { dateDetails, tickets } = formState;
	const { createEntity: createDatetime } = useDatetimeMutator();
	const toUtcISO = useSiteDateToUtcISO();
	const dates = useDatetimes();

	const allTickets = Object.values(tickets);
	const sharedTickets = getSharedTickets(allTickets);
	const nonSharedTickets = getNonSharedTickets(allTickets);

	const totalItems = useMemo(() => {
		const sharedTicketsCount = sharedTickets.length;
		const nonSharedTicketsCount = nonSharedTickets.length;
		const generatedDatesCount = generatedDates.length;

		return sharedTicketsCount + nonSharedTicketsCount * generatedDatesCount + generatedDatesCount;
	}, [generatedDates.length, nonSharedTickets.length, sharedTickets.length]);

	const { incrementProgress, totalProgress, updateProgress } = useProgress(totalItems, initialProgress);

	const mutateTickets = useMutateTickets({ incrementProgress: incrementProgress('tickets') });
	const saveRecurrence = useSaveRecurrence();

	useEffect(() => {
		totalProgress && console.log('totalProgress', `${totalProgress}%`);
	}, [totalProgress]);

	return useCallback(async () => {
		// create shared tickets and collect their ids
		const recurrenceId = await saveRecurrence(formState);

		// create shared tickets and collect their ids
		const sharedTicketIds = await mutateTickets(sharedTickets, true);

		// prepare common date mutation input
		const normalizedDateInput = copyDatetimeFields(dateDetails, isDatetimeInputField);

		const { duration, unit } = dateDetails;

		const highestDateOrder = last(sortDates({ dates, sortBy: 'order' }))?.order || 0;

		// Dates can be mutated in parallel
		await Promise.all(
			generatedDates.map(async ({ date: start }, index) => {
				const end = computeDatetimeEndDate(start, unit, duration);

				// create tickets for the date and get the related ids
				const relatedTicketIds = await mutateTickets(nonSharedTickets, false, {
					startDate: start,
					endDate: end,
				});
				const tickets = [...sharedTicketIds, ...relatedTicketIds];

				// compute and convert start and end date to UTC
				const startDate = toUtcISO(start);
				const endDate = toUtcISO(end);

				// order will be the highest order among dates plus its position (index +1) in the list
				const order = highestDateOrder + index + 1;

				const input = { ...normalizedDateInput, order, startDate, endDate, tickets, recurrence: recurrenceId };

				await createDatetime(input);
				updateProgress('datetimes');
			})
		);
	}, [
		createDatetime,
		dateDetails,
		dates,
		formState,
		generatedDates,
		mutateTickets,
		nonSharedTickets,
		saveRecurrence,
		sharedTickets,
		toUtcISO,
		updateProgress,
	]);
};

export default useSubmitForm;
