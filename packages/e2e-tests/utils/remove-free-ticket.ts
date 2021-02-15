/// <reference types="jest-playwright-preset" />

export const removeFreeTicket = async () => {
	await page.click('[aria-label="ticket main menu"]');

	await page.click('[type=button] >> text=trash ticket');

	await page.click('[type=button] >> text=Yes');
};
