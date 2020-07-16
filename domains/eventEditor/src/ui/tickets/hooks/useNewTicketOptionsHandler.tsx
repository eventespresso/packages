import React, { useCallback } from 'react';

import { NewEntitySubscriptionCb } from '@eventespresso/registry';
import { AddSingleTicket } from '../ticketsList/newTicketOptions';

type TicketsSubscriptionCallback = NewEntitySubscriptionCb<'ticket'>;

const useNewTicketOptionsHandler = (): TicketsSubscriptionCallback => {
	return useCallback<TicketsSubscriptionCallback>(({ entityType, registry }) => {
		const { registerElement: registerOptionItem } = registry;

		registerOptionItem('AddSingleTicket', () => <AddSingleTicket />);
	}, []);
};

export default useNewTicketOptionsHandler;
