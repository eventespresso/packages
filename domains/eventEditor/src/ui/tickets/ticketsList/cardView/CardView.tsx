import React from 'react';

import { EntityCardList } from '@eventespresso/components';
import { useFilteredTickets } from '@eventespresso/edtr-services';

import TicketCard from './TicketCard';

const CardView: React.FC = () => {
	const filteredEntities = useFilteredTickets();

	return <EntityCardList EntityCard={TicketCard} entities={filteredEntities} />;
};

export default CardView;
