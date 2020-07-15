import React from 'react';

import { CurrencyInput } from '@eventespresso/components';
import { SimpleEntityCard } from '@eventespresso/components';
import { TicketCardProps } from './types';

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
	const beforeDetails = <CurrencyInput id={ticket.id} amount={ticket.price} tag='h5' vertical />;

	return <SimpleEntityCard beforeDetails={beforeDetails} id={ticket.id} name={ticket.name} />;
};

export default React.memo(TicketCard);
