const menuLinkSelector = '.toplevel_page_espresso_events > a';

const ticketsListSelector = '#ee-entity-list-tickets .ee-entity-list__card-view';

export async function createNewEvent({ title }: any = {}) {
	await page.waitForSelector(menuLinkSelector);

	await page.click(menuLinkSelector);

	await page.click(`#add-new-event`);

	await page.focus('#titlewrap #title');

	await page.type('#titlewrap #title', title);

	await page.click(`#publishing-action #publish`);

	// Wait for page load after the event is published
	await page.waitForNavigation();

	// Wait for tickets list lazy load
	await page.waitForFunction((selector) => document.querySelector(selector), ticketsListSelector);
}
