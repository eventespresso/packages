import type { PaginatedEntities } from '@eventespresso/hooks';
import type { Entity } from '@eventespresso/data';

export const paginateEntities = <E extends Entity | any>({
	entities,
	pageNumber,
	perPage,
}: PaginatedEntities<E>): E[] => {
	return entities.slice(perPage * (pageNumber - 1), perPage * pageNumber);
};
