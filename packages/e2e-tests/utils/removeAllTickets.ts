/// <reference types="jest-playwright-preset" />

// TODO: make it work properly
export const removeAllTickets = async () => {
	const ticketMainMenus = Array.from(await page.$$('.ee-ticket-main-menu button'));

	for (const menu of ticketMainMenus) {
		await menu.click();
		await page.click('[type=button] >> text=trash ticket');
		await page.click('[type=button] >> text=Yes');
	}
};
