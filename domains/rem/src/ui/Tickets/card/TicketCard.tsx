import React from 'react';
import { __, sprintf } from '@wordpress/i18n';

import { CurrencyInput, SimpleEntityCard } from '@eventespresso/components';
import { BaseProps } from '../types';
import Sidebar from './Sidebar';
import { useFormState } from '../../../data';

const TicketCard: React.FC<BaseProps> = ({ ticket }) => {
	const { tickets } = useFormState();
	const { ticketSalesStart, ticketSalesEnd } = tickets?.[ticket.id];

	const beforeDetails = <CurrencyInput id={ticket.id} amount={ticket.price} tag='h5' vertical />;

	const afterDetails = ticketSalesStart && ticketSalesEnd && (
		<div className='ee-ticket-offset'>
			<div>
				{sprintf(
					__('starts: %1$d %2$s %3$s the %4$s date'),
					ticketSalesStart?.unitValue,
					ticketSalesStart?.unit,
					ticketSalesStart?.position,
					ticketSalesStart?.startOrEnd
				)}
			</div>
			<div>
				{sprintf(
					__('ends: %1$d %2$s %3$s the %4$s date'),
					ticketSalesEnd?.unitValue,
					ticketSalesEnd?.unit,
					ticketSalesEnd?.position,
					ticketSalesEnd?.startOrEnd
				)}
			</div>
		</div>
	);

	const sidebar = <Sidebar ticket={ticket} />;

	return (
		<SimpleEntityCard
			afterDetails={afterDetails}
			beforeDetails={beforeDetails}
			id={ticket.id}
			name={ticket.name}
			sidebar={sidebar}
		/>
	);
};

export default React.memo(TicketCard);
