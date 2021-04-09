import { clickButton } from '@e2eUtils/common';
import { fillDateTicketForm, DateTicketFormArgs } from './';
import { setPrice } from './setPrice';

export const addNewTicket = async ({ amount, ...fields }: DateTicketFormArgs & { amount?: number }) => {
	await page.click('text=Add New Ticket');

	await fillDateTicketForm(fields);

	await clickButton('Set ticket prices');

	await page.waitForTimeout(1000);

	await page.click('text=Add default prices');

	await setPrice({ amount, isBasePrice: true } as any);

	await clickButton('Save and assign dates');

	// Ensure that trashed dates are visible
	await page.click('[aria-label="show trashed dates"]');

	await page.click('[aria-label="assign ticket"]');

	await page.click('button[type=submit]');

	await page.waitForTimeout(2000); // the ticket list is not updated instantly
};
