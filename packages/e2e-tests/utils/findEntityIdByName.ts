import type { Entity } from '../types';

interface Props extends Entity {
	name: string;
}

export const findEntityIdByName = async ({ entity, name }: Props) => {
	const entityList = await page.$(`#ee-entity-list-${entity}s`);

	const listItemId = await entityList.$eval(`text=${name}`, (e) => e.closest('.ee-entity-list-item').id);

	const [entityId] = listItemId.match(new RegExp('(?<=row-)(.*)(?=-row)', 'g'));

	return entityId;
};
