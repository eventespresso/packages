const menuLinkSelector = '.toplevel_page_espresso_events > a';

export async function createNewEvent({ title }: any = {}) {
	await page.waitForSelector(menuLinkSelector);

	await page.click(menuLinkSelector);

	await page.click(`#add-new-event`);

	await page.focus('#titlewrap #title');

	await page.type('#titlewrap #title', title);

	await page.click(`#publishing-action #publish`);
}
