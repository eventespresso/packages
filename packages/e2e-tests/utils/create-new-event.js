export async function createNewEvent({ title } = {}) {
	await page.click(`.toplevel_page_espresso_events > a`);

	await page.click(`#add-new-event`);

	await page.focus('#titlewrap #title');

	await page.type('#titlewrap #title', title);

	await page.click(`#publishing-action #publish`);
}
