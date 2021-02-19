/// <reference types="jest-playwright-preset" />

export const removeLastTicket = async () => {
	await page.click('[aria-label="ticket main menu"]').catch(console.log);

	await page.click('[type=button] >> text=trash ticket');

	await page.click('[type=button] >> text=Yes');
};
