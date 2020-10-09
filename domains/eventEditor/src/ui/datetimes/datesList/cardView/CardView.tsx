import React from 'react';

import { EntityCardList } from '@eventespresso/components';
import { useFilteredDates } from '@eventespresso/edtr-services';

import DateCard from './DateCard';

const CardView: React.FC = () => {
	const filteredEntities = useFilteredDates();

	return <EntityCardList EntityCard={DateCard} entities={filteredEntities} />;
};

export default CardView;
