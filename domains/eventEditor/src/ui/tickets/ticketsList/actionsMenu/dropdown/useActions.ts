import { useCallback, useMemo } from 'react';

import { isTrashed } from '@eventespresso/predicates';
import { useTicketItem } from '@eventespresso/edtr-services';
import useDeleteTicketHandler from '@edtrUI/tickets/hooks/useDeleteTicketHandler';
import useCopyTicket from './useCopyTicket';
import type { EntityId } from '@eventespresso/data';

type Actions = {
	copyTicket: VoidFunction;
	trashTicket: VoidFunction;
	isTrashed: boolean;
};

const useActions = (ticketId: EntityId): Actions => {
	// Make sure to subscribe to Apollo cache
	// to avoid stale data
	const ticket = useTicketItem({ id: ticketId });

	const deleteTicket = useDeleteTicketHandler(ticketId);

	const trashed = isTrashed(ticket);

	const trashTicket = useCallback(() => deleteTicket(trashed), [deleteTicket, trashed]);

	const copyTicket = useCopyTicket(ticket);

	return useMemo(
		() => ({
			copyTicket,
			trashTicket,
			isTrashed: trashed,
		}),
		[copyTicket, trashTicket, trashed]
	);
};

export default useActions;
