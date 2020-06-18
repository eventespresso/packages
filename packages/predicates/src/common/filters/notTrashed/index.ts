import { Trashable } from '@eventespresso/data';
import { isTrashed } from '../../isTrashed';

export const notTrashed = <T extends Trashable>(entities: T[]): T[] => {
	return entities.filter((entity) => !isTrashed(entity));
};
