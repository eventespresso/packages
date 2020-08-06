import { useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useMutationWithFeedback, MutationType } from '@eventespresso/data';
import { useSystemNotifications } from '@eventespresso/toaster';
import type { Datetime, DatetimeEdge } from '../../types';
import { useDatetimeQueryOptions, useDatetimes } from '../../queries';
import { useUpdateDatetimeList } from '../../../hooks';
import { BulkUpdateDatetimeInput, BULK_UPDATE_DATETIMES } from './';
import { TypeName } from '../';

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
			// convert uniqueInputs array to object with ids as keys and the objects as values
			const uniqueInputs = input.uniqueInputs.reduce((inputs, currentInput) => {
				return { ...inputs, [currentInput.id]: currentInput };
			}, {});

			// override the data for the selected nodes from the given input
			const nodes = allDatetimes.map<Datetime>((node) => {
				// if the node is not in selected nodes
				if (!uniqueInputs?.[node.id]) {
					return node;
				}
				return {
					...node,
					...input.sharedInput,
					...uniqueInputs[node.id],
					cacheId: uuidv4(),
				};
			});

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
