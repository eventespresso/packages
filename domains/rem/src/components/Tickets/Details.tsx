import React from 'react';

import { Heading } from '@eventespresso/adapters';
import type { TicketCardProps } from './types';

const Details: React.FC<TicketCardProps> = ({ ticket }) => {
	return (
		<>
			<Heading as='h5'>{ticket.name}</Heading>
			<Heading as='h6'>{ticket.description}</Heading>
			<Heading as='p'>price: {ticket.price}</Heading>
		</>
	);
};

export default React.memo(Details);
