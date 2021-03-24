/// <reference types="jest-playwright-preset" />

import { setPrice } from './setPrice';

export const addNewTicket = async ({ amount, name }: any = {}) => {
	await page.click('text=Add New Ticket');

	await page.focus('.ee-render-fields >> text=Name');

	await page.type('.ee-render-fields >> text=Name', name);

	await page.click('[type=button] >> text=Set ticket prices');

	await page.waitForTimeout(1000);

	await page.click('text=Add default prices');

	await setPrice({ amount, isBasePrice: true } as any);

	await page.click('[type=button] >> text=Save and assign dates');

	await page.click('[aria-label="assign ticket"]');

	await page.click('button[type=submit]');

	await page.waitForTimeout(2000); // the ticket list is not updated instantly
};
