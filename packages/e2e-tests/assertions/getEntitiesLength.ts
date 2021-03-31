import { Entity } from '../types';

export const getEntitiesLength = async (entity: Entity['entity']) => {
	return await page.$$eval(`#ee-entity-list-${entity}s .ee-entity-card-wrapper`, (elements) => elements.length);
};
