import { clickButton } from './';
import { EntityListParser } from './EntityListParser';

const selector = '.ee-ticket-main-menu button';

const parser = new EntityListParser('ticket');

export const removeAllTickets = async () => {
	let button = await page.$(selector);

	while (button) {
		await button.click();
		await clickButton('trash ticket');
		await clickButton('Yes');

		button = await page.$(selector);
	}

	// Wait for tickets list to refresh
	await page.waitForFunction(
		(selector) => !document.querySelector(selector),
		`${parser.getRootSelector()} .ee-entity-list__card-view`
	);
};
