/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { createNewEvent } from '../../utils';

const namespace = 'event.tickets.card.view.inline-inputs';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	it('should check the date card inline inputs', async () => {
		const ticketsList = '#ee-entity-list-tickets';
		const newDateName = 'new ticket name';
		const newDateDesc = 'new ticket description';
		const newDateCap = '100';

		await page.click(`${ticketsList} .entity-card-details__name`);
		await page.type(`${ticketsList} .entity-card-details__name`, newDateName);
		await page.click(`${ticketsList} .entity-card-details__text`);
		await page.click('.chakra-modal__content-container .public-DraftStyleDefault-block');
		await page.type('.chakra-modal__content-container .public-DraftStyleDefault-block', newDateDesc);
		await page.click('.chakra-modal__footer button[type=submit]');
		await page.click(`${ticketsList} .ee-entity-details__value .ee-tabbable-text`);
		await page.type(`${ticketsList} .ee-entity-details__value .ee-inline-edit__input`, newDateCap);
		await page.click(ticketsList); // click outside of the inline input

		expect(
			await page.$eval(`${ticketsList} .entity-card-details__name`, (elements) => elements.innerHTML)
		).toContain(newDateName);
		expect(
			await page.$eval(`${ticketsList} .entity-card-details__text`, (elements) => elements.innerHTML)
		).toContain(newDateDesc);
		expect(
			await page.$eval(
				`${ticketsList} .ee-entity-details__value .ee-tabbable-text`,
				(elements) => elements.innerHTML
			)
		).toContain(newDateCap);

		await browser.close();
	});
});
