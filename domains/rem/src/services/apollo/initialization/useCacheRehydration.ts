import { useEffect, useRef } from 'react';
import { assocPath } from 'ramda';

import { __ } from '@eventespresso/i18n';
import { useSystemNotifications } from '@eventespresso/toaster';
import { useRelations } from '@eventespresso/services';
import { useIsRehydrated } from '@eventespresso/data';

import useCacheRehydrationData from './useCacheRehydrationData';
import { useUpdateRecurrenceList } from '../../../hooks';
import { DEFAULT_RECURRENCE_LIST_DATA, useRecurrenceQueryOptions } from '../queries';

/**
 * Returns true if the cache has been rehydrated, false otherwise
 */
const useCacheRehydration = (): boolean => {
	const { getData: getRelationalData, initialize, isInitialized } = useRelations();
	const [isRehydrated] = useIsRehydrated();
	const toaster = useSystemNotifications();

	const { recurrences: espressoRecurrences = DEFAULT_RECURRENCE_LIST_DATA, relations } = useCacheRehydrationData();

	const recurrenceQueryOptions = useRecurrenceQueryOptions();
	const updateRecurrenceList = useUpdateRecurrenceList();

	const initialized = useRef(false);

	useEffect(() => {
		// Make sure REM rehydration happens after core
		if (initialized.current || !isRehydrated) {
			return;
		}
		/* Rehydrate recurrences */
		updateRecurrenceList({
			...recurrenceQueryOptions,
			data: {
				espressoRecurrences,
			},
		});
		toaster.success({ message: __('recurrences initialized') });

		const relationalData = getRelationalData();

		// Update recurrences to dates relational data
		let newRelationalData = assocPath(['recurrences'], relations?.recurrences, relationalData);

		// now we need to update the relational data from dates to recurrences
		// make sure we have something to deal with
		if (relations?.datetimes) {
			Object.entries(relations.datetimes).forEach(([datetimeId, relations]) => {
				newRelationalData = assocPath(
					['datetimes', datetimeId, 'recurrences'],
					relations.recurrences,
					newRelationalData
				);
			});
		}

		// set the new relational data
		initialize(newRelationalData);

		// switch the flag
		initialized.current = true;
	}, [
		espressoRecurrences,
		getRelationalData,
		initialize,
		isInitialized,
		isRehydrated,
		recurrenceQueryOptions,
		relations,
		toaster,
		updateRecurrenceList,
	]);

	return initialized.current;
};

export default useCacheRehydration;
