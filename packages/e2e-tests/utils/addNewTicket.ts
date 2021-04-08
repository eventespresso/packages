import { clickButton, setPrice, fillDateTicketForm, DateTicketFormArgs } from './';

const toastSelector = `.ee-toaster-notice__toast`;

export const addNewTicket = async ({ amount, ...fields }: DateTicketFormArgs & { amount?: number }) => {
	await page.click('text=Add New Ticket');

	await fillDateTicketForm(fields);

	await clickButton('Set ticket prices');

	const defaultPricesButton = 'text=Add default prices';

	await page.waitForSelector(defaultPricesButton);

	await page.click(defaultPricesButton);

	await setPrice({ amount, isBasePrice: true } as any);

	await clickButton('Save and assign dates');

	// Ensure that trashed dates are visible
	await page.click('[aria-label="show trashed dates"]');

	await page.click('[aria-label="assign ticket"]');

	await page.click('button[type=submit]');

	// Wait for tickets list to update
	await page.waitForFunction((selector) => {
		const toastBody = document.querySelector(`${selector} .ee-toaster-notice__toast-body`).textContent;

		return toastBody.includes('successfully created ticket');
	}, toastSelector);

	try {
		await page.click(`${toastSelector} .Toastify__close-button`);
	} catch (error) {
		// do nothing
	}
};
