import { useCallback, useMemo } from 'react';

import { useMutationWithFeedback, MutationType } from '@eventespresso/data';
import { useSystemNotifications } from '@eventespresso/toaster';
import type { DatetimeEdge } from '../../types';
import { useDatetimeQueryOptions, useDatetimes } from '../../queries';
import { useUpdateDatetimeList } from '../../../hooks';
import { BulkUpdateDatetimeInput, BULK_UPDATE_DATETIMES } from './';
import { TypeName } from '../';
import { cacheNodesFromBulkInput } from '../utils';

interface BulkEditDatetimes {
	updateEntities: (input: BulkUpdateDatetimeInput) => ReturnType<ReturnType<typeof useMutationWithFeedback>>;
}

const useBulkEditDatetimes = (): BulkEditDatetimes => {
	const allDatetimes = useDatetimes();
	const queryOptions = useDatetimeQueryOptions();
	const toaster = useSystemNotifications();
	const updateDatetimeList = useUpdateDatetimeList();

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
		},
		[allDatetimes, queryOptions, updateDatetimeList]
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
