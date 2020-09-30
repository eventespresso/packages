import { useMemo } from 'react';

import { GET_TICKET } from '../tickets';
import type { Ticket, TicketItem } from '../../types';
import type { EntityItemProps } from '../types';
import { useCacheQuery, CacheQueryOptions } from '@eventespresso/data';

const useTicketItem = ({ id }: EntityItemProps): Ticket => {
	const options: CacheQueryOptions = {
		query: GET_TICKET,
		variables: {
			id,
		},
	};
	const { data } = useCacheQuery<TicketItem>(options);
	const ticket = data?.ticket;

	return useMemo(() => ticket, [ticket]);
};

export default useTicketItem;
