/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { getDocument, queries } from 'playwright-testing-library';

import { saveVideo } from 'playwright-video';

import { addNewTicket, createNewEvent } from '../../utils';

const { getByText } = queries;

describe('availableTickets', () => {
	it('should add new ticket', async () => {
		const capture = await saveVideo(page, 'artifacts/new-ticket.mp4');

		await page.waitForTimeout(500);

		await createNewEvent({ title: 'to be deleted' });

		const newTicketName = 'one way ticket';
		const newTicketAmount = 1234;

		await addNewTicket({ amount: newTicketAmount, name: newTicketName });

		const $document = await getDocument(page);

		const $newTicketNameNode = await getByText($document, newTicketName);

		expect(await $newTicketNameNode.innerHTML()).toContain(newTicketName);

		const newTicketNameNode = await page.$eval('#ee-entity-list-tickets', (el) => el.innerHTML);

		expect(newTicketNameNode).toContain(newTicketName);

		const newTicketCurrencyNode = await page.$eval(
			`text=${newTicketName}`,
			(e) =>
				e
					.closest('.ee-entity-card-wrapper')
					.querySelector('.ee-currency-input .ee-tabbable-text__inner_wrapper').innerHTML
		);

		expect(newTicketCurrencyNode).toContain('1419.10');

		await capture.stop();
		await browser.close();
	});
});
