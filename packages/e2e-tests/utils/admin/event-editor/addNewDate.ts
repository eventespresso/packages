import { clickButton } from '@e2eUtils/common';
import { EntityListParser } from '@e2eUtils/admin/event-editor';
import { DateTicketFormArgs, fillDateTicketForm } from './fillDateTicketForm';

const parser = new EntityListParser('datetime');

export const addNewDate = async (fields: DateTicketFormArgs) => {
	try {
		await page.click('text=Add New Date');

		await fillDateTicketForm(fields);

		await clickButton('Save and assign tickets');

		// Ensure that trashed tickets are visible
		await page.click('[aria-label="show trashed tickets"]');

		await page.click('[aria-label="assign ticket"]');

		const waitForListUpdate = await parser.createWaitForListUpdate();

		await page.click('button[type=submit]');

		await waitForListUpdate();
	} catch (e) {
		console.log(e);
	}
};
