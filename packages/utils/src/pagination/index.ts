import type { PaginatedEntities } from '@eventespresso/hooks';

export const paginateEntities = <E>({ entities, pageNumber, perPage }: PaginatedEntities<E>): E[] => {
	return entities.slice(perPage * (pageNumber - 1), perPage * pageNumber);
};
