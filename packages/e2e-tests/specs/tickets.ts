/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { getDocument, queries } from 'playwright-testing-library';

import { saveVideo } from 'playwright-video';

import { activatePlugin, addNewTicket, createNewEvent, loginUser } from '../utils';

const { getByText } = queries;

describe('Available Tickets', () => {
	it('should add new ticket', async () => {
		const capture = await saveVideo(page, 'artifacts/new-ticket.mp4');

		await loginUser();

		process.env.CI === 'true' && (await activatePlugin('event-espresso'));

		await createNewEvent({ title: 'to be deleted' });

		const newTicketName = 'one way ticket';
		const newTicketAmount = '1234';

		await addNewTicket({ amount: newTicketAmount, name: newTicketName });

		const $document = await getDocument(page);

		const $newTicketNameNode = await getByText($document, newTicketName);

		expect(await $newTicketNameNode.innerHTML()).toContain(newTicketName);

		const newTicketNameNode = await page.$eval('#ee-entity-list-tickets', (el) => el.innerHTML);

		expect(newTicketNameNode).toContain(newTicketName);

		const newTicketCurrencyNode = await page.$eval('#ee-entity-list-tickets', (el) => el.innerHTML);

		expect(newTicketCurrencyNode).toContain(newTicketAmount);

		await page.waitForTimeout(2000); // the ticket list is not updated instantly

		await capture.stop();
		await browser.close();
	});
});
