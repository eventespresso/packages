const menuLinkSelector = '.toplevel_page_espresso_events > a';

const ticketsListSelector = '#ee-entity-list-tickets .ee-entity-list__card-view';

export async function createNewEvent({ title }: any = {}) {
	await page.waitForSelector(menuLinkSelector);

	await page.click(menuLinkSelector);

	await page.click('#add-new-event');

	await page.focus('#titlewrap #title');

	await page.type('#titlewrap #title', title);

	await Promise.all([
		// Wait for page load after the event is published
		page.waitForNavigation(),
		page.click('#publishing-action #publish'),
	]);

	// Wait for tickets list lazy load
	await page.waitForSelector(ticketsListSelector);
}
