import { Trashable } from '@eventespresso/data';

/**
 * @function
 * @param {Object} entity object
 * @return {boolean} true if ticket is trashed
 */
export const isTrashed = <T extends Trashable>(entity: T): boolean => {
	// `isTrashed` may be undefined, safe to compare with boolean
	return entity.isTrashed === true;
};
