import React, { Fragment } from 'react';

import { useTickets } from '@eventespresso/edtr-services';

import TicketCard from './TicketCard';
import './style.scss';

const Tickets: React.FC = () => {
	const tickets = useTickets();

	return (
		<div className='rem-ticket-list'>
			{tickets.map((ticket) => (
				<Fragment key={ticket.id}>
					<TicketCard ticket={ticket} />
				</Fragment>
			))}
		</div>
	);
};

export default Tickets;
