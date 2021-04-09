export async function createNewEvent({ title }: any = {}) {
	await page.waitForTimeout(1000);

	await page.click(`.toplevel_page_espresso_events > a`).catch(console.log);

	await page.click(`#add-new-event`).catch(console.log);

	await page.focus('#titlewrap #title').catch(console.log);

	await page.type('#titlewrap #title', title).catch(console.log);

	await page.click(`#publishing-action #publish`).catch(console.log);
}
