import * as R from 'ramda';

export const getGuids = R.pluck<'id'>('id');

export const getCacheIds = R.pluck<'cacheId'>('cacheId');

/**
 * Returns the highest order from the given list.
 */
export function getHighestOrder<E extends Record<'order', number>>(entities: Array<E>): number {
	return R.last(R.sortBy(R.prop('order'), entities))?.order || 0;
}

/**
 * Converts an array of entities to an object of id => entity
 */
export function idToEntityMap<E extends Record<'id', string>>(entities: Array<E>): Record<string, E> {
	return R.indexBy(R.prop('id'), entities);
}

/**
 * Sorts the given list by order prop of the objects
 */
export function sortByOrder<E extends Record<'order', number>>(list: Array<E>): Array<E> {
	return R.sortBy(R.prop('order'), list);
}

/**
 * Sets the order prop of the items in the list based on the index.
 * startIndex can be used to avoid order getting set to 0
 */
export function setOrderByIndex<E extends Record<'order', number>>(list: Array<E>, startIndex = 1): Array<E> {
	return list.map((item, index) => {
		return { ...item, order: index + startIndex };
	});
}
