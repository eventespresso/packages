import { useCallback } from 'react';

import useOnCreateRecurrence from './useOnCreateRecurrence';
import useOnDeleteRecurrence from './useOnDeleteRecurrence';
import useOnUpdateRecurrence from './useOnUpdateRecurrence';
import useMutationVariables from './useMutationVariables';
import type { MutationHandler, MutationUpdater } from '@eventespresso/edtr-services';
import { MutationType } from '@eventespresso/data';
import { RecurrencesList, Recurrence } from '../../types';
import { DEFAULT_RECURRENCE_LIST_DATA as DEFAULT_LIST_DATA, useRecurrenceQueryOptions } from '../../queries';
import type { RecurrenceCommonInput } from './types';

type MH = MutationHandler<Recurrence, RecurrenceCommonInput>;

const useMutationHandler = (): MH => {
	const options = useRecurrenceQueryOptions();

	const onCreateRecurrence = useOnCreateRecurrence();
	const onUpdateRecurrence = useOnUpdateRecurrence();
	const onDeleteRecurrence = useOnDeleteRecurrence();

	const getMutationVariables = useMutationVariables();

	const onUpdate = useCallback<MutationUpdater<Recurrence, RecurrenceCommonInput>>(
		({ cache, entity: recurrence, input, mutationType }) => {
			// Read the existing data from cache.
			let data: RecurrencesList;
			try {
				data = cache.readQuery(options);
			} catch (error) {
				data = null;
			}
			const recurrences = data?.espressoRecurrences || DEFAULT_LIST_DATA;
			const datetimeIds = input?.datetimes || [];

			switch (mutationType) {
				case MutationType.Create:
					onCreateRecurrence({ cache, recurrences, recurrence, datetimeIds });
					break;
				case MutationType.Update:
					onUpdateRecurrence({ cache, recurrences, recurrence, datetimeIds });
					break;
				case MutationType.Delete:
					onDeleteRecurrence({ cache, recurrences, recurrence });
					break;
			}
		},
		[onCreateRecurrence, onDeleteRecurrence, onUpdateRecurrence, options]
	);
	const mutator = useCallback<MH>(
		(mutationType, input) => {
			const variables = getMutationVariables(mutationType, input);

			return { variables, onUpdate };
		},
		[getMutationVariables, onUpdate]
	);

	return mutator;
};

export default useMutationHandler;
