import { Entity } from '@eventespresso/data';

export const hasTempId = <E extends Entity>(entity: E): boolean => {
	return entity?.id?.startsWith('temp:');
};
