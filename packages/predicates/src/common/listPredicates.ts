import { indexBy, last, pluck, prop, sortBy } from 'ramda';

export const getGuids = pluck<'id'>('id');

export const getCacheIds = pluck<'cacheId'>('cacheId');

/**
 * Returns the highest order from the given list.
 */
export function getHighestOrder<E extends Record<'order', number>>(entities: Array<E>): number {
	return last(sortBy(prop('order'), entities))?.order || 0;
}

/**
 * Converts an array of entities to an object of id => entity
 */
export function idToEntityMap<E extends Record<'id', string>>(entities: Array<E>): Record<string, E> {
	return indexBy(prop('id'), entities);
}
