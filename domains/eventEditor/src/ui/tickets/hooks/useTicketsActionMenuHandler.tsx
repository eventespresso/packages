import React, { useCallback } from 'react';

import AssignDatesButton from '../ticketsList/actionsMenu/AssignDatesButton';
import { TicketMainMenu } from '../ticketsList/actionsMenu/dropdown';
import TicketPriceCalculatorButton from '../ticketPriceCalculator/buttons/TicketPriceCalculatorButton';
import { EntityActionsSubscriptionCb } from '@eventespresso/unknown'; // '@appLayout/entityActionsMenu';
import { Ticket } from '@eventespresso/edtr-services';

type TicketsSubscriptionCallback = EntityActionsSubscriptionCb<Ticket, 'ticket'>;

const useTicketsActionMenuHandler = (): TicketsSubscriptionCallback => {
	return useCallback<TicketsSubscriptionCallback>(({ entity: ticket, registry }) => {
		const { registerElement: registerMenuItem } = registry;

		registerMenuItem('ticketMainMenu', () => <TicketMainMenu ticket={ticket} />);

		registerMenuItem('assignDates', () => <AssignDatesButton entity={ticket} />);

		registerMenuItem('ticketPriceCalculator', () => <TicketPriceCalculatorButton ticketId={ticket.id} />);
	}, []);
};

export default useTicketsActionMenuHandler;
