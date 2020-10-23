import { pluck } from 'ramda';

import type { Cacheable, Entity } from '@eventespresso/data';
import type { AnyObject } from '@eventespresso/utils';

export const getGuids = pluck<keyof Pick<Entity, 'id'>>('id');

export const getCacheIds = pluck<keyof Pick<Cacheable, 'cacheId'>>('cacheId');

/**
 * Converts an array of entities to an object of id => entity
 */
export const idToEntityMap = <E extends Entity>(entities: Array<E>): AnyObject<E> => {
	return entities.reduce((map, entity) => ({ ...map, [entity.id]: entity }), {});
};
