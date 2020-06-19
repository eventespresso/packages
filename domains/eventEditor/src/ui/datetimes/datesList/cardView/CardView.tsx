import React from 'react';
import { EntityCardList } from '@eventespresso/components';
import DateCard from './DateCard';
import { useDatesListContext } from '@edtrServices/context/EntityListContext';

const CardView: React.FC = React.memo(() => {
	const { filteredEntities } = useDatesListContext();

	return <EntityCardList EntityCard={DateCard} entities={filteredEntities} />;
});

export default CardView;
