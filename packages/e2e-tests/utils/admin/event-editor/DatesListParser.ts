import { clickButton } from '@e2eUtils/common';
import { EntityListParser, ListView, Item, Field } from './EntityListParser';
import { fillDateTicketForm } from './fillDateTicketForm';

export type DateFields = {
	capacity?: string;
	isTrashed?: boolean;
	endDate?: Date;
	name?: string;
	startDate?: Date;
};

export class DatesListParser extends EntityListParser {
	constructor(view: ListView = 'card') {
		super('datetime', view);
	}

	/**
	 * Given an entity item, it updates the capacity in the inline edit input
	 */
	updateCapacityInline = async (item: Item, capacity: string | number) => {
		const inlineEditPreview = await item.$('.ee-entity-details__value .ee-tabbable-text');
		await inlineEditPreview.click();
		const inlineEditInput = await item.$('.ee-entity-details__value .ee-inline-edit__input');
		await inlineEditInput.type(String(capacity));

		const waitForListUpdate = await this.createWaitForListUpdate();
		await page.click(this.getRootSelector()); // click outside of the inline input
		await waitForListUpdate();
	};

	/**
	 * Opens the edit form for the date identified by the field and its value.
	 */
	openEditFormBy = async (field: Field, value: string | number): Promise<void> => {
		const date = await this.getItemBy(field, value);
		const mainMenuButton = await date.$('[aria-label="event date main menu"]');
		await mainMenuButton.click();
		await clickButton('edit datetime');
	};

	/**
	 * Opens the edit form for the date identified by the field and its value.
	 */
	editDateBy = async (field: Field, value: string | number, formData: DateFields): Promise<void> => {
		await this.openEditFormBy(field, value);
		await fillDateTicketForm(formData);

		await clickButton('Save and assign tickets');
		const waitForListUpdate = await this.createWaitForListUpdate();
		await page.click('button[type=submit]');
		await waitForListUpdate();
	};
}
