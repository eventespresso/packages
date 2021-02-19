export async function createNewEvent({ title }: any = {}) {
	await page.waitForTimeout(1000);

	await page.click(`.toplevel_page_espresso_events > a`).catch(console.log);

	await page.click(`#add-new-event`);

	await page.focus('#titlewrap #title');

	await page.type('#titlewrap #title', title);

	await page.click(`#publishing-action #publish`);
}
