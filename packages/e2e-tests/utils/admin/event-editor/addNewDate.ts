import { clickButton } from '@e2eUtils/common';
import { EntityListParser } from '@e2eUtils/admin/event-editor';
import { DateTicketFormArgs, fillDateTicketForm } from './fillDateTicketForm';

const parser = new EntityListParser('datetime');

export const addNewDate = async (fields: DateTicketFormArgs) => {
	await page.click('text=Add New Date');

	await fillDateTicketForm(fields);

	await clickButton('Save and assign tickets');

	await page.waitForSelector('[aria-label="assign ticket"]');

	await page.click('[aria-label="assign ticket"]');

	const waitForListUpdate = await parser.createWaitForListUpdate();

	await page.click('button[type=submit]');

	await waitForListUpdate();
};
