import { useCallback, useState, useEffect } from 'react';

import { copyDatetimeFields, isDatetimeInputField } from '@eventespresso/predicates';
import { getSharedTickets, getNonSharedTickets, computeDatetimeEndDate } from '../utils';
import { useSiteDateToUtcISO } from '@eventespresso/services';
import type { GeneratedDate } from '../ui/generatedDates';
import type { FormState } from './types';
import { useDatetimeMutator } from '@eventespresso/edtr-services';
import useMutateTickets from './useMutateTickets';
import { Progress, getTotalProgress } from '../utils/getProgress';

const useSubmitForm = (formState: FormState, generatedDates: Array<GeneratedDate>): (() => Promise<void>) => {
	const { dateDetails, tickets } = formState;
	const [progress, setProgress] = useState<Progress>({ datetimes: 0, tickets: 0 });
	const { createEntity: createDatetime } = useDatetimeMutator();
	const toUtcISO = useSiteDateToUtcISO();

	// updates progress for a given entity type
	const updateProgress = useCallback((forEntity: keyof Progress, value = 1) => {
		setProgress((prevProgress) => {
			// add the value to existing progress for the given entity
			const updatedProgress = prevProgress[forEntity] + value;
			return { ...prevProgress, [forEntity]: updatedProgress };
		});
	}, []);

	const incrementTicketProgress = useCallback(() => {
		updateProgress('tickets');
	}, [updateProgress]);

	const mutateTickets = useMutateTickets({ incrementProgress: incrementTicketProgress });

	const allTickets = Object.values(tickets);
	const sharedTickets = getSharedTickets(allTickets);
	const nonSharedTickets = getNonSharedTickets(allTickets);

	useEffect(() => {
		const totalProgress = getTotalProgress({
			sharedTickets,
			nonSharedTickets,
			generatedDates,
			progress,
		});
		console.log('totalProgress', `${totalProgress}%`);
	}, [generatedDates, nonSharedTickets, progress, sharedTickets]);

	return useCallback(async () => {
		// create shared tickets and collect their ids
		const sharedTicketIds = await mutateTickets(sharedTickets, true);

		// prepare common date mutation input
		const normalizedDateInput = copyDatetimeFields(dateDetails, isDatetimeInputField);

		const { duration, unit } = dateDetails;

		// Dates can be mutated in parallel
		await Promise.all(
			generatedDates.map(async ({ date: start }) => {
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

				const input = { ...normalizedDateInput, startDate, endDate, tickets };

				await createDatetime(input);
				updateProgress('datetimes');
			})
		);
	}, [
		createDatetime,
		dateDetails,
		generatedDates,
		mutateTickets,
		nonSharedTickets,
		sharedTickets,
		toUtcISO,
		updateProgress,
	]);
};

export default useSubmitForm;
