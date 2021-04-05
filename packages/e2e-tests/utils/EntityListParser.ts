import type { Page, ElementHandle } from 'playwright';

export type EntityType = 'datetime' | 'ticket';
export type View = 'card' | 'table';
export type Field = 'name' | 'dbId';
export type Item = ElementHandle<SVGElement | HTMLElement>;

export class EntityListParser {
	entityType: EntityType;

	view: View;

	constructor(entityType: EntityType, view: View = 'card') {
		this.entityType = entityType;
		this.view = view;
	}

	/**
	 * Change the current entity type in the instance.
	 */
	setEntityType = (entityType: EntityType): void => {
		this.entityType = entityType;
	};

	/**
	 * Change the current view in the instance.
	 */
	setView = (view: View): void => {
		this.view = view;
	};

	/**
	 * Retrieve the entity list root selector.
	 */
	getRootSelector = (): string => {
		return `#ee-entity-list-${this.entityType}s`;
	};

	/**
	 * Retrieve the entity list element.
	 */
	getListRoot = async (): ReturnType<Page['$']> => {
		return await page.$(this.getRootSelector());
	};

	/**
	 * Retrieve the entity filter bar element.
	 */
	getFilterBar = async (): ReturnType<ElementHandle['$']> => {
		const entityList = await this.getListRoot();

		return entityList?.$('.ee-filter-bar');
	};

	/**
	 * Retrieve the entity items wrapper based on the current view.
	 */
	getItemsListWrapper = async (): ReturnType<ElementHandle['$']> => {
		return this.view === 'card' ? this.getCardList() : this.getTableList();
	};

	/**
	 * Retrieve the entity card view list wrapper element.
	 */
	getCardList = async (): ReturnType<ElementHandle['$']> => {
		const entityList = await this.getListRoot();

		return entityList?.$('.ee-entity-list__card-view');
	};

	/**
	 * Retrieve the entity table view list wrapper element.
	 */
	getTableList = async (): ReturnType<ElementHandle['$']> => {
		const entityList = await this.getListRoot();

		return entityList?.$('.ee-entity-table tbody');
	};

	/**
	 * Retrieve  an array of items in the list.
	 */
	getListItems = async (): ReturnType<ElementHandle['$$']> => {
		const list = await this.getItemsListWrapper();

		const items = (await list?.$$('.ee-entity-list-item')) || [];

		return items;
	};

	/**
	 * Retrieve  an item/element from the entity list.
	 * If no dbId is provided, first item will be returned.
	 */
	getItem = async (dbId?: number): ReturnType<ElementHandle['$']> => {
		if (dbId) {
			return await this.getItemBy('dbId', dbId);
		}

		const items = await this.getListItems();

		// no dbId is supplied, lets return the first item, if present
		return items?.[0];
	};

	/**
	 * Retrieve  an item/element from the entity list by the given field value.
	 */
	getItemBy = async (field: Field, value: string | number): ReturnType<ElementHandle['$']> => {
		const items = await this.getListItems();

		if (items && field && value) {
			// We can't use items.find(), because it doesn't accept promises
			for (const item of items) {
				const fieldValue = await this.getItemField(item, field);

				if (fieldValue === value) {
					return item;
				}
			}
		}
		return null;
	};

	/**
	 * Retrieve the field value of an item/element.
	 */
	getItemField = async (item: Item, field: Field): Promise<string | number> => {
		switch (field) {
			case 'dbId':
				return this.getItemDbId(item);

			case 'name':
				return this.getItemName(item);
		}

		return null;
	};

	/**
	 * Retrieve the dbId of an item/element. Default to first item.
	 */
	getItemDbId = async (item?: Item): Promise<number> => {
		const targetItem = item || (await this.getItem());
		let dbIdStr: string;

		if (this.view === 'card') {
			dbIdStr = await targetItem?.$eval('.ee-entity-ids .ee-entity-dbid', (e) => e.textContent);
		} else {
			const listItemId = await targetItem?.evaluate((element) => element.id);
			dbIdStr = listItemId?.match(/row-(?<id>.+?)-row/)?.groups?.id;
		}

		return dbIdStr && parseInt(dbIdStr);
	};

	/**
	 * Retrieve the name of an item/element. Default to first item.
	 */
	getItemName = async (item?: Item): Promise<string> => {
		const targetItem = item || (await this.getItem());
		const nameSelector = this.view === 'card' ? '.entity-card-details__name' : '.ee-entity-name';

		return await targetItem?.$eval(nameSelector, (e) => e.textContent);
	};

	/**
	 * Retrieve the description of an item/element. Default to first item.
	 */
	getItemDesc = async (item?: Item): Promise<string> => {
		const targetItem = item || (await this.getItem());
		if (this.view === 'card') {
			return await targetItem?.$eval('.entity-card-details__text', (e) => e.textContent);
		}
		// there is no description in table view.
		return '';
	};

	/**
	 * Retrieve the dbIds of all the items in the list.
	 */
	getDbIds = async (): Promise<Array<number>> => {
		const items = await this.getListItems();

		const dbIds: Array<number> = [];

		// We can't use items.map(), because it doesn't accept promises
		for (const item of items) {
			const dbId = await this.getItemDbId(item);

			if (dbId) {
				dbIds.push(dbId);
			}
		}

		return dbIds;
	};

	/**
	 * Retrieve the number of items in the list.
	 */
	getItemCount = async (): Promise<number> => {
		const items = await this.getListItems();

		return items.length;
	};

	/**
	 * Retrieve the dbId of an item in the list by its name.
	 */
	getDbIdByName = async (name: string): Promise<number> => {
		const item = await this.getItemBy('name', name);

		return await this.getItemDbId(item);
	};
}
