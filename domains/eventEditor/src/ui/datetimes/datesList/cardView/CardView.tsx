import React from 'react';

import { EntityCardList } from '@eventespresso/components';
import { useFilteredDateIds } from '@eventespresso/edtr-services';

import DateCard from './DateCard';

const CardView: React.FC = () => {
	const filteredDateIds = useFilteredDateIds();

	return <EntityCardList EntityCard={DateCard} entityIds={filteredDateIds} />;
};

export default CardView;
