import { clickButton, respondToAlert } from '@e2eUtils/common';
import { EntityListParser, Item, Field } from './EntityListParser';

export interface CommonEntityFields {
	isTrashed?: boolean;
	endDate?: Date;
	name?: string;
	description?: string;
	startDate?: Date;
}

export type CommonFilters = 'status' | 'sales' | 'search';

export class EntityEditor extends EntityListParser {
	static RTEContentSelector = '.chakra-modal__content-container .public-DraftStyleDefault-block';

	dropdownMenuLabel = '';
	editButtonLabel = '';
	trashButtonLabel = '';
	copyButtonLabel = '';
	deleteButtonLabel = 'delete permanently';

	/**
	 * Given an entity item, it updates the name in the inline edit input
	 */
	updateNameInline = async (item: Item, name: string) => {
		// .ee-entity-name for table view
		const inlineEditPreview = await item.$('.entity-card-details__name, .ee-entity-name >> .ee-tabbable-text');
		await inlineEditPreview.click();
		const inlineEditInput = await item.$('.entity-card-details__name, .ee-entity-name >> input');
		await inlineEditInput.type(name);

		const waitForListUpdate = await this.createWaitForListUpdate();
		await item.press('Enter');
		await waitForListUpdate();
	};

	/**
	 * Given an entity item, it updates the description in the inline edit input
	 */
	updateDescInline = async (item: Item, desc: string) => {
		const element = await item.$('.entity-card-details__text');
		await element.click();

		await page.click(EntityEditor.RTEContentSelector);
		await page.type(EntityEditor.RTEContentSelector, desc);

		const waitForListUpdate = await this.createWaitForListUpdate();
		await page.click('.chakra-modal__footer button[type=submit]');
		await waitForListUpdate();
	};

	/**
	 * Given an entity item, it updates the value in the inline edit input in card details.
	 * This can be used to update date capacity or ticket quantity.
	 */
	updateDetailsInputInline = async (item: Item, value: string) => {
		const inlineEditPreview = await item.$('.ee-entity-details__value .ee-tabbable-text');
		await inlineEditPreview.click();
		const inlineEditInput = await item.$('.ee-entity-details__value .ee-inline-edit__input');
		await inlineEditInput.type(String(value));

		const waitForListUpdate = await this.createWaitForListUpdate();
		await item.press('Enter');
		await waitForListUpdate();
	};

	/**
	 * Copies/clones an entity item.
	 */
	copyItem = async (item?: Item): Promise<void> => {
		const targetItem = await this.openDropdownMenu(item);
		await this.copyAndWait(targetItem);
	};

	/**
	 * Copies an entity item identified by the field and its value.
	 */
	copyItemBy = async (field: Field, value: string | number): Promise<void> => {
		const item = await this.openDropdownMenuBy(field, value);
		await this.copyAndWait(item);
	};

	/**
	 * Selects copy option from the dropdown menu and waits for the entity list to update.
	 */
	copyAndWait = async (item: Item): Promise<void> => {
		const waitForListUpdate = await this.createWaitForListUpdate();
		await clickButton(this.copyButtonLabel, item);
		await waitForListUpdate();
	};

	/**
	 * Trashs an entity item.
	 */
	trashItem = async (item?: Item): Promise<void> => {
		const targetItem = await this.openDropdownMenu(item);
		await this.confirmAndDelete(targetItem, this.trashButtonLabel);
	};

	/**
	 * Trashs an entity item identified by the field and its value.
	 */
	trashItemBy = async (field: Field, value: string | number): Promise<void> => {
		const item = await this.openDropdownMenuBy(field, value);
		await this.confirmAndDelete(item, this.trashButtonLabel);
	};

	/**
	 * Deletes an entity item permanently
	 */
	permanentlyDeleteItem = async (item?: Item): Promise<void> => {
		const targetItem = await this.openDropdownMenu(item);
		await this.confirmAndDelete(targetItem, this.deleteButtonLabel);
	};

	/**
	 * Permanently deletes an entity item identified by the field and its value.
	 */
	permanentlyDeleteItemBy = async (field: Field, value: string | number): Promise<void> => {
		const item = await this.openDropdownMenuBy(field, value);
		await this.confirmAndDelete(item, this.deleteButtonLabel);
	};

	/**
	 * Confirms an entity deletion and waits for the entity list to update.
	 */
	confirmAndDelete = async (item: Item, label: string): Promise<void> => {
		await page.waitForTimeout(500);
		await clickButton(label, item);
		const waitForListUpdate = await this.createWaitForListUpdate();
		await respondToAlert('Yes');
		await waitForListUpdate();
	};

	/**
	 * Opens the dropdown menu for the entity item. Default to first item.
	 */
	openDropdownMenu = async (item?: Item): Promise<Item> => {
		const targetItem = item || (await this.getItem());
		const mainMenuButton = await targetItem.$(`[aria-label="${this.dropdownMenuLabel}"]`);
		await mainMenuButton.click();
		await targetItem.waitForSelector('.ee-dropdown-menu__toggle--open');
		return targetItem;
	};

	/**
	 * Opens the dropdown menu for the entity identified by the field and its value.
	 */
	openDropdownMenuBy = async (field: Field, value: string | number): Promise<Item> => {
		const entityItem = await this.getItemBy(field, value);
		return await this.openDropdownMenu(entityItem);
	};

	/**
	 * Opens the edit form for the entity item.
	 */
	openEditForm = async (item?: Item): Promise<void> => {
		const targetItem = await this.openDropdownMenu(item);
		await clickButton(this.editButtonLabel, targetItem);
	};

	/**
	 * Opens the edit form for the entity identified by the field and its value.
	 */
	openEditFormBy = async (field: Field, value: string | number): Promise<void> => {
		const targetItem = await this.openDropdownMenuBy(field, value);
		await clickButton(this.editButtonLabel, targetItem);
	};

	/**
	 * Submits the entity edit form and waits for the entity list to update.
	 */
	submitEditForm = async (): Promise<void> => {
		const waitForListUpdate = await this.createWaitForListUpdate();
		await page.click('button[type=submit]');
		await waitForListUpdate();
	};
}
