import { identity, sortBy } from 'ramda';

import { GET_TICKETS } from '../tickets';
import type { EntityId, TicketsList, TicketsQueryArgs, CacheQueryOptions } from '@eventespresso/data';
import type { TicketEdge } from '../../';
import useDatetimeIds from '../datetimes/useDatetimeIds';
import { useMemoStringify } from '@eventespresso/hooks';

type TicketsQueryOptions = CacheQueryOptions<TicketsList<TicketEdge>, TicketsQueryArgs>;

const useTicketQueryOptions = (datetimeIn: EntityId[] = []): TicketsQueryOptions => {
	const datetimeIds = useDatetimeIds();

	let newDatetimeIn = datetimeIn.length ? datetimeIn : datetimeIds;

	// Sort the IDs list which may be out of order,
	// thus changing the key used to access Apollo Cache
	newDatetimeIn = sortBy(identity, newDatetimeIn);

	const options: TicketsQueryOptions = {
		query: GET_TICKETS,
		variables: {
			where: {
				datetimeIn: newDatetimeIn,
			},
		},
	};

	return useMemoStringify(options, newDatetimeIn);
};

export default useTicketQueryOptions;
