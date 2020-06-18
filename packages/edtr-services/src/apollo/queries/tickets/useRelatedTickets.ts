import { useMemo } from 'react';

import { entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { entityListCacheIdString, useRelations} from '@eventespresso/services';
import useTickets from './useTickets';
import { Ticket } from '../../types';
import { RelatedEntitiesHook } from '../types';

const useRelatedTickets: RelatedEntitiesHook<Ticket, 'tickets'> = ({ entity, entityId }) => {
	const tickets = useTickets();
	const { getRelations } = useRelations();
	const relatedTicketIds = getRelations({
		entity,
		entityId,
		relation: 'tickets',
	});

	const cacheIds = entityListCacheIdString(tickets);
	const relatedTicketIdsStr = JSON.stringify(relatedTicketIds);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => entitiesWithGuIdInArray(tickets, relatedTicketIds), [relatedTicketIdsStr, cacheIds]);
};

export default useRelatedTickets;
