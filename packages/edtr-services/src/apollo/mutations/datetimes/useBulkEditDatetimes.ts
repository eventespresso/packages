import { useCallback, useMemo } from 'react';

import { useMutationWithFeedback, MutationType } from '@eventespresso/data';
import { useSystemNotifications } from '@eventespresso/toaster';
import { useDatetimeQueryOptions, useDatetimes } from '../../queries';
import { BulkUpdateDatetimeInput, BULK_UPDATE_DATETIMES } from './';
import useOnUpdateDatetime from './useOnUpdateDatetime';
import { useUpdateDatetimeList } from '../../../hooks';
import { cacheNodesFromBulkInput } from '../utils';
import type { DatetimeEdge, Datetime } from '../../types';
import { TypeName } from '../';

interface BulkEditDatetimes {
	updateEntities: (input: BulkUpdateDatetimeInput) => ReturnType<ReturnType<typeof useMutationWithFeedback>>;
}

const useBulkEditDatetimes = (): BulkEditDatetimes => {
	const allDatetimes = useDatetimes();
	const queryOptions = useDatetimeQueryOptions();
	const toaster = useSystemNotifications();
	const updateDatetimeList = useUpdateDatetimeList();
	const onUpdateDatetime = useOnUpdateDatetime();

	const updateDatetimes = useMutationWithFeedback({
		typeName: TypeName.Datetime,
		mutationType: MutationType.Update,
		mutation: BULK_UPDATE_DATETIMES,
		toaster,
	});

	const updateEntityList = useCallback(
		(input: BulkUpdateDatetimeInput) => () => {
			const nodes = cacheNodesFromBulkInput(input, allDatetimes);

			const espressoDatetimes: DatetimeEdge = {
				nodes,
				__typename: 'EspressoRootQueryDatetimesConnection',
			};
			updateDatetimeList({
				...queryOptions,
				data: {
					espressoDatetimes,
				},
			});
			// update entity relations
			input.uniqueInputs.forEach(({ tickets, ...updateInput }) => {
				onUpdateDatetime({ datetime: updateInput as Datetime, tickets });
			});
		},
		[allDatetimes, onUpdateDatetime, queryOptions, updateDatetimeList]
	);

	const updateEntities = useCallback<BulkEditDatetimes['updateEntities']>(
		(input) => {
			const variables = {
				input: {
					clientMutationId: 'BULK_UPDATE_DATETIMES',
					...input,
				},
			};
			return updateDatetimes({ variables, update: updateEntityList(input) });
		},
		[updateDatetimes, updateEntityList]
	);

	return useMemo(() => ({ updateEntities }), [updateEntities]);
};

export default useBulkEditDatetimes;
