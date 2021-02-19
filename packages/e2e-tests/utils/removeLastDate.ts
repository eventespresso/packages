/// <reference types="jest-playwright-preset" />

export const removeLastDate = async () => {
	await page.click('[aria-label="event date main menu"]');

	await page.click('[type=button] >> text=trash datetime');

	await page.click('[type=button] >> text=Yes');
};
