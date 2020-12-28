import { useCallback, useEffect, useMemo } from 'react';
import { parseISO } from 'date-fns';

import { useProgress } from '@eventespresso/hooks';
import type { EntityId } from '@eventespresso/data';
import { useLazyDatetime } from '@eventespresso/edtr-services';

import { getSharedTickets, getNonSharedTickets } from '../../utils';
import useMutateTickets from '../../data/useMutateTickets';
import type { FormState } from '../../data';

const initialProgress = { datetimes: 0, tickets: 0 };

const useSubmitForm = (tickets: FormState['tickets'], datetimeIds: Array<EntityId>): (() => Promise<void>) => {
	const allTickets = Object.values(tickets);
	const sharedTickets = getSharedTickets(allTickets);
	const nonSharedTickets = getNonSharedTickets(allTickets);

	const totalItems = useMemo(() => {
		const sharedTicketsCount = sharedTickets.length;
		const nonSharedTicketsCount = nonSharedTickets.length;

		return sharedTicketsCount + datetimeIds.length * nonSharedTicketsCount;
	}, [datetimeIds.length, nonSharedTickets.length, sharedTickets.length]);

	const { incrementProgress, totalProgress, updateProgress } = useProgress(totalItems, initialProgress);

	const mutateTickets = useMutateTickets({ incrementProgress: incrementProgress('tickets') });
	const getDatetime = useLazyDatetime();

	useEffect(() => {
		totalProgress && console.log('totalProgress', `${totalProgress}%`);
	}, [totalProgress]);

	return useCallback(async () => {
		// add datetime relation for all the shared tickets
		const updatedSharedTickets = sharedTickets.map((ticket) => ({ ...ticket, datetimes: datetimeIds }));

		// create shared tickets
		await mutateTickets(updatedSharedTickets, true);

		// Dates can be mutated in parallel
		await Promise.all(
			datetimeIds.map(async (datetimeId) => {
				const datetime = getDatetime(datetimeId);
				const startDate = parseISO(datetime?.startDate);
				const endDate = parseISO(datetime?.endDate);

				const updatedNonSharedTickets = nonSharedTickets.map((ticket) => ({
					...ticket,
					datetimes: [datetimeId],
				}));

				await mutateTickets(updatedNonSharedTickets, false, {
					startDate,
					endDate,
				});

				updateProgress('datetimes');
			})
		);
	}, [datetimeIds, getDatetime, mutateTickets, nonSharedTickets, sharedTickets, updateProgress]);
};

export default useSubmitForm;
