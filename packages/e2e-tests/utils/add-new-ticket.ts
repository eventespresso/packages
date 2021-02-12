/// <reference types="jest-playwright-preset" />

import { pressKeyWithModifier } from '../utils/press-key-with-modifier';

export const addNewTicket = async ({ amount, name }: any = {}) => {
	await page.click('text=Add New Ticket');

	await page.focus('.ee-render-fields >> text=Name');

	await page.type('.ee-render-fields >> text=Name', name);

	await page.click('[type=button] >> text=Set ticket prices');

	await page.click('[type=button] >> text=Add default prices');

	await page.click('[aria-label="amount"]');

	await pressKeyWithModifier('primary', 'a');

	await page.type('[aria-label="amount"]', amount);

	await page.click('[type=button] >> text=Save and assign dates');

	await page.click('[aria-label="assign ticket"]');

	await page.click('button[type=submit]');

	await page.waitForTimeout(2000); // the ticket list is not updated instantly
};
