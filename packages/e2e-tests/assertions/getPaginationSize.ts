import type { EntityType } from '../types';

export const getPaginationSize = async (entityType: EntityType) => {
	return await page.$$eval(
		`#ee-entity-list-${entityType}s .ee-pagination .rc-pagination-item`,
		(elements) => elements.length
	);
};
