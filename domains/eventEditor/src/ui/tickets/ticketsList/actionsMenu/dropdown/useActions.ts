import { useCallback, useMemo } from 'react';

import { isTrashed } from '@eventespresso/predicates';
import { useTicketItem, useTicketMutator } from '@eventespresso/edtr-services';
import useCopyTicket from './useCopyTicket';
import type { EntityId } from '@eventespresso/data';

type Actions = {
	copyTicket: () => Promise<void>;
	isTrashed: boolean;
	hasRegistrations?: boolean;
	untrashTicket: VoidFunction;
};

const useActions = (ticketId: EntityId): Actions => {
	// Make sure to subscribe to Apollo cache
	// to avoid stale data
	const ticket = useTicketItem({ id: ticketId });

	const trashed = isTrashed(ticket);

	const copyTicket = useCopyTicket(ticket);

	const { updateEntity: updateTicket } = useTicketMutator();

	const untrashTicket = useCallback(() => {
		updateTicket({ id: ticketId, isTrashed: false });
	}, [ticketId, updateTicket]);

	const hasRegistrations = Boolean(ticket.sold);

	return useMemo(
		() => ({
			copyTicket,
			hasRegistrations,
			isTrashed: trashed,
			untrashTicket,
		}),
		[copyTicket, hasRegistrations, trashed, untrashTicket]
	);
};

export default useActions;
