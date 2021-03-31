import type { Entity } from '../types';

interface Props extends Entity {
	name: string;
	view: 'card' | 'table';
}

export const findEntityIdByName = async ({ entity, name, view }: Props) => {
	const entityList = await page.$(`#ee-entity-list-${entity}s`);

	const listItemId = await entityList.$eval(`text=${name}`, (e) => e.closest('.ee-entity-list-item').id);

	if (view === 'table') {
		const [, entityId] = listItemId.split(/-row-/);

		return entityId;
	}

	if (view === 'card') {
		const [entityId] = listItemId.split('ee-entity-paper-frame-').filter(Boolean);

		return entityId;
	}
};
