import { useMemo } from 'react';
import { pick } from 'ramda';

import type { EspressoFormProps } from '@eventespresso/form';
import { Ticket, TicketFormConfig } from '@eventespresso/edtr-services';
import useMainTicketFormConfig, { FIELD_NAMES } from '../../ticketForm/useTicketFormConfig';
import { DefaultTicket } from '../data';

const useTicketFormConfig = (ticket?: DefaultTicket, config?: EspressoFormProps): TicketFormConfig => {
	const newConfig = useMainTicketFormConfig(ticket?.id, config);

	return useMemo(
		() => ({
			...newConfig,
			initialValues: {
				...pick<Omit<Partial<DefaultTicket>, 'prices'>, keyof Ticket>(FIELD_NAMES, ticket || {}),
				...newConfig?.initialValues,
			},
		}),
		[newConfig, ticket]
	);
};

export default useTicketFormConfig;
