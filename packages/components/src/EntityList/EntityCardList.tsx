import React from 'react';

import type { EntityCardListProps } from './types';
import { Entity } from '@eventespresso/data';
import { entitiesUnchanged } from '@eventespresso/services';

const EntityCardList = <E extends Entity>({ EntityCard, entities }: EntityCardListProps<E>) => {
	return (
		<div className='ee-entity-list__card-view'>
			{entities.map((entity) => (
				<EntityCard entity={entity} key={entity.id} />
			))}
		</div>
	);
};

export default React.memo(EntityCardList, entitiesUnchanged);
