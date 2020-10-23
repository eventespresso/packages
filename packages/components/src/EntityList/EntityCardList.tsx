import React from 'react';

import type { EntityCardListProps } from './types';
import { Entity } from '@eventespresso/data';

const EntityCardList = <E extends Entity>({ EntityCard, entityIds }: EntityCardListProps<E>): JSX.Element => {
	return (
		<div className='ee-entity-list__card-view'>
			{entityIds.map((entityId) => (
				<EntityCard id={entityId} key={entityId} />
			))}
		</div>
	);
};

export default EntityCardList;
