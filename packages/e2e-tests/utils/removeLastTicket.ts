/// <reference types="jest-playwright-preset" />

export const removeLastTicket = async () => {
	await page.click('[aria-label="ticket main menu"]').catch(() => console.log('there is no ticket main menu'));

	await page.click('[type=button] >> text=trash ticket');

	await page.click('[type=button] >> text=Yes');
};
