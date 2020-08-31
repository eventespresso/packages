import React from 'react';
import { EntityCardList } from '@eventespresso/components';
import DateCard from './DateCard';
import { useFilteredDates } from '@edtrServices/filterState';

const CardView: React.FC = React.memo(() => {
	const filteredEntities = useFilteredDates();

	return <EntityCardList EntityCard={DateCard} entities={filteredEntities} />;
});

export default CardView;
