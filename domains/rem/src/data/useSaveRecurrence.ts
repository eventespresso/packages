import { useCallback } from 'react';
import { RRule, RRuleSet } from 'rrule';

// import { useTicketMutator } from '@eventespresso/edtr-services';
import type { EntityId } from '@eventespresso/data';

import type { FormState } from './types';

type Callback = (formState: FormState) => EntityId; //  Promise<EntityId>;

const useSaveRecurrence = (): Callback => {
	// const { createEntity: createTicket } = useTicketMutator();

	// Async to make sure that prices are handled before updating the ticket.
	return useCallback(
		/* async  */ ({ rRule, exRule, rDates, exDates, dateDetails }) => {
			const name = RRule.fromString(rRule).toText();

			console.log({ name, rDates, exDates, duration: dateDetails?.duration, sOffset: dateDetails?.unit });

			/* // prepare ticket mutation input
			const normalizedTicketFields = {
				...copyTicketFields(ticket, isTicketInputField),
				price: parsedAmount(ticket.price || 0),
				reverseCalculate: toBoolean(ticket.reverseCalculate),
			};

			// create ticket and wait for the promise to resolve
			const result = await createTicket({ ...normalizedTicketFields, prices: relatedPriceIds });

			const ticketId = result?.data?.createEspressoTicket?.espressoTicket?.id; */

			return '';
		},
		[]
	);
};

export default useSaveRecurrence;
