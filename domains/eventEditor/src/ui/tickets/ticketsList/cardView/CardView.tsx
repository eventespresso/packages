import React from 'react';
import { EntityCardList } from '@eventespresso/components';
import TicketCard from './TicketCard';
import { useFilteredTickets } from '@edtrServices/filterState';

const CardView: React.FC = () => {
	const filteredEntities = useFilteredTickets();

	return <EntityCardList EntityCard={TicketCard} entities={filteredEntities} />;
};

export default CardView;
