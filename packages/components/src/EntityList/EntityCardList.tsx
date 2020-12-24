import React from 'react';

import type { EntityCardListProps } from './types';
import type { Entity } from '@eventespresso/data';

const EntityCardList = <E extends Entity>({ EntityCard, entityIds }: EntityCardListProps<E>): JSX.Element => {
	// key to make sure the list is refreshed after optimistic responses
	const key = entityIds.join(':');
	return (
		<div className='ee-entity-list__card-view' key={key}>
			{entityIds.map((entityId) => (
				<EntityCard id={entityId} key={entityId} />
			))}
		</div>
	);
};

export default EntityCardList;
