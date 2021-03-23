/// <reference types="jest-playwright-preset" />

const selector = '.ee-ticket-main-menu button';

export const removeAllTickets = async () => {
	let button = await page.$(selector);

	while (button) {
		await button.click();
		await page.click('[type=button] >> text=trash ticket');
		await page.click('[type=button] >> text=Yes');

		button = await page.$(selector);
	}
};
