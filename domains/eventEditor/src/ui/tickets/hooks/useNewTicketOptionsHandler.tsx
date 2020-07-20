import React, { useCallback } from 'react';

import { NewEntitySubscriptionCb } from '@eventespresso/registry';
import { AddSingleTicket } from '../ticketsList/newTicketOptions';

type TicketsSubscriptionCallback = NewEntitySubscriptionCb<'ticket'>;

const useNewTicketOptionsHandler = (): TicketsSubscriptionCallback => {
	return useCallback<TicketsSubscriptionCallback>(({ registry }) => {
		const { registerElement: registerOptionItem } = registry;

		registerOptionItem('AddSingleTicket', ({ totalCount }) => <AddSingleTicket isOnlyButton={totalCount === 1} />);
	}, []);
};

export default useNewTicketOptionsHandler;
