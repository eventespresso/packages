/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { createNewEvent, EntityListParser } from '../../utils';
import { modalRTESel } from '../../constants';

const namespace = 'event.tickets.card.view.inline-inputs';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

const parser = new EntityListParser('ticket');

describe(namespace, () => {
	it('should check the date card inline inputs', async () => {
		const newTicketName = 'new ticket name';
		const newTicketDesc = 'new ticket description';
		const newTicketQty = '100';

		await page.click(`${parser.getRootSelector()} .entity-card-details__name`);
		await page.type(`${parser.getRootSelector()} .entity-card-details__name`, newTicketName);
		await page.click(`${parser.getRootSelector()} .entity-card-details__text`);
		await page.click(modalRTESel);
		await page.type(modalRTESel, newTicketDesc);
		await page.click('.chakra-modal__footer button[type=submit]');
		await page.click(`${parser.getRootSelector()} .ee-entity-details__value .ee-tabbable-text`);
		await page.type(`${parser.getRootSelector()} .ee-entity-details__value .ee-inline-edit__input`, newTicketQty);
		await page.click(parser.getRootSelector()); // click outside of the inline input

		// first/only item
		const item = await parser.getItem();

		expect(await parser.getItemName(item)).toContain(newTicketName);

		expect(await parser.getItemDesc(item)).toContain(newTicketDesc);

		const details = await item?.$eval(
			'.ee-entity-details__value .ee-tabbable-text',
			(elements) => elements.textContent
		);

		expect(details).toContain(newTicketQty);

		await browser.close();
	});
});
