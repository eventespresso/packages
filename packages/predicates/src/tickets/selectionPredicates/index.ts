import { assoc, includes, map, ObjPred, when } from 'ramda';

import { TICKET_FIELDS, TICKET_INPUT_FIELDS } from '../ticketFields';
import { entityHasGuid } from '.././../common';
import { EntityId } from '@eventespresso/data';
import type { Ticket } from '@eventespresso/edtr-services';

interface UpdateTicketPriceForTicketProps {
	amount: number;
	guid: EntityId;
	tickets: Ticket[];
}

interface UpdateTicketReverseCalculateProps {
	guid: EntityId;
	reverseCalculate: boolean;
	tickets: Ticket[];
}

export const isTicketField: ObjPred = (value, field) => includes(field, TICKET_FIELDS);

export const isTicketInputField: ObjPred = (value, field) => includes(field, TICKET_INPUT_FIELDS);

export const updateTicketPrice = (amount: number): ((obj: Ticket) => Ticket) => {
	return assoc<number, keyof Ticket>('price', amount);
};

export const updateReverseCalculate = (reverseCalculate: boolean): ((obj: Ticket) => Ticket) => {
	return assoc<boolean, keyof Ticket>('reverseCalculate', reverseCalculate);
};

export const updateTicketPriceForTicket = ({ amount, guid, tickets }: UpdateTicketPriceForTicketProps): Ticket[] => {
	return map(when(entityHasGuid(guid), updateTicketPrice(amount)), tickets);
};

export const updateTicketReverseCalculate = ({
	tickets,
	guid,
	reverseCalculate,
}: UpdateTicketReverseCalculateProps): Ticket[] => {
	return map(when(entityHasGuid(guid), updateReverseCalculate(reverseCalculate)), tickets);
};
