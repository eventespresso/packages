import { useMemo } from 'react';
import { identity, isNil, sortBy } from 'ramda';

import { GET_TICKETS } from '../tickets';
import type { EntityId, TicketsList, TicketsQueryArgs, CacheQueryOptions } from '@eventespresso/data';
import type { TicketEdge } from '../../';
import useDatetimeIds from '../datetimes/useDatetimeIds';

type TicketsQueryOptions = CacheQueryOptions<TicketsList<TicketEdge>, TicketsQueryArgs>;

const useTicketQueryOptions = (datetimeIn?: EntityId[], queryArgs?: TicketsQueryArgs['where']): TicketsQueryOptions => {
	const datetimeIds = useDatetimeIds();

	return useMemo<TicketsQueryOptions>(() => {
		let newDatetimeIn = !isNil(datetimeIn) ? datetimeIn : datetimeIds;

		// Sort the IDs list which may be out of order,
		// thus changing the key used to access Apollo Cache
		newDatetimeIn = sortBy(identity, newDatetimeIn);

		const where: TicketsQueryArgs['where'] = { ...queryArgs };

		if (newDatetimeIn?.length) {
			where.datetimeIn = newDatetimeIn;
		}

		return {
			query: GET_TICKETS,
			variables: {
				where,
			},
		};
	}, [datetimeIds, datetimeIn, queryArgs]);
};

export default useTicketQueryOptions;
