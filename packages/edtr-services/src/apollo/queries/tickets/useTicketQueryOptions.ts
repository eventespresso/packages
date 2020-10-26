import { useMemo } from 'react';
import { identity, sortBy } from 'ramda';

import { GET_TICKETS } from '../tickets';
import type { EntityId, TicketsList, TicketsQueryArgs, CacheQueryOptions } from '@eventespresso/data';
import type { TicketEdge } from '../../';
import useDatetimeIds from '../datetimes/useDatetimeIds';

type TicketsQueryOptions = CacheQueryOptions<TicketsList<TicketEdge>, TicketsQueryArgs>;

const EMPTY_ARRAY: EntityId[] = [];

const useTicketQueryOptions = (datetimeIn = EMPTY_ARRAY): TicketsQueryOptions => {
	const datetimeIds = useDatetimeIds();

	return useMemo<TicketsQueryOptions>(() => {
		let newDatetimeIn = datetimeIn.length ? datetimeIn : datetimeIds;

		// Sort the IDs list which may be out of order,
		// thus changing the key used to access Apollo Cache
		newDatetimeIn = sortBy(identity, newDatetimeIn);

		return {
			query: GET_TICKETS,
			variables: {
				where: {
					datetimeIn: newDatetimeIn,
				},
			},
		};
	}, [datetimeIds, datetimeIn]);
};

export default useTicketQueryOptions;
