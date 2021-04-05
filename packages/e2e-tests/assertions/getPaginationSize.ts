import type { Entity } from '../types';

export const getPaginationSize = async (entity: Entity['entity']) => {
	return await page.$$eval(
		`#ee-entity-list-${entity}s .ee-pagination .rc-pagination-item`,
		(elements) => elements.length
	);
};
