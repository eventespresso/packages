import { sortBy, identity } from 'ramda';

import type { RecurrencesList, RecurrencesQueryArgs, CacheQueryOptions, EntityId } from '@eventespresso/data';
import { useDatetimeIds } from '@eventespresso/edtr-services';
import { useMemoStringify } from '@eventespresso/hooks';

import type { RecurrenceEdge } from '../../types';
import { GET_RECURRENCES } from '../recurrences';

export type RecurrencesQueryOptions = CacheQueryOptions<RecurrencesList<RecurrenceEdge>, RecurrencesQueryArgs>;

const useRecurrenceQueryOptions = (datetimeIn: EntityId[] = []): RecurrencesQueryOptions => {
	const datetimeIds = useDatetimeIds();

	let newDatetimeIn = datetimeIn.length ? datetimeIn : datetimeIds;

	// Sort the IDs list which may be out of order,
	// thus changing the key used to access Apollo Cache
	newDatetimeIn = sortBy(identity, newDatetimeIn);

	const options: RecurrencesQueryOptions = {
		query: GET_RECURRENCES,
		variables: {
			where: {
				datetimeIn: newDatetimeIn,
			},
		},
	};

	return useMemoStringify(options);
};

export default useRecurrenceQueryOptions;
