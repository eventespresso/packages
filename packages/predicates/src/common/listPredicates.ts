import { indexBy, pluck, prop } from 'ramda';

export const getGuids = pluck<'id'>('id');

export const getCacheIds = pluck<'cacheId'>('cacheId');

/**
 * Converts an array of entities to an object of id => entity
 */
export const idToEntityMap = <E extends Record<'id', string>>(entities: Array<E>): Record<string, E> => {
	return indexBy(prop('id'), entities);
};
