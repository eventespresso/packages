import { clickButton } from './';
import { DateTicketFormArgs, fillDateTicketForm } from './fillDateTicketForm';

export const addNewDate = async (fields: DateTicketFormArgs) => {
	await page.click('text=Add New Date');

	await fillDateTicketForm(fields);

	await clickButton('Save and assign tickets');

	// Ensure that trashed tickets are visible
	await page.click('[aria-label="show trashed tickets"]');

	await page.click('[aria-label="assign ticket"]');

	await page.click('button[type=submit]');
};
