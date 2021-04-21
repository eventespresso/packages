import { EntityListParser, ListView, Item } from './EntityListParser';

export class TicketsListParser extends EntityListParser {
	constructor(view: ListView = 'card') {
		super('ticket', view);
	}

	/**
	 * Given an entity item, it updates the quantity in the inline edit input
	 */
	updateQuantityInline = async (item: Item, quantity: string | number) => {
		const inlineEditPreview = await item.$('.ee-entity-details__value .ee-tabbable-text');
		await inlineEditPreview.click();
		const inlineEditInput = await item.$('.ee-entity-details__value .ee-inline-edit__input');
		await inlineEditInput.type(String(quantity));

		const waitForListUpdate = await this.createWaitForListUpdate();
		await page.click(this.getRootSelector()); // click outside of the inline input
		await waitForListUpdate();
	};
}
