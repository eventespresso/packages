/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { createNewEvent } from '../../utils';
import { modalRTESel } from '../../constants';

const namespace = 'event.dates.card.view.inline-inputs';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	it('should check the date card inline inputs', async () => {
		const datesList = '#ee-entity-list-tickets';
		const newDateName = 'new date name';
		const newDateDesc = 'new date description';
		const newDateCap = '100';

		await page.click(`${datesList} .entity-card-details__name`);
		await page.type(`${datesList} .entity-card-details__name`, newDateName);
		await page.click(`${datesList} .entity-card-details__text`);
		await page.click(modalRTESel);
		await page.type(modalRTESel, newDateDesc);
		await page.click('.chakra-modal__footer button[type=submit]');
		await page.click(`${datesList} .ee-entity-details__value .ee-tabbable-text`);
		await page.type(`${datesList} .ee-entity-details__value .ee-inline-edit__input`, newDateCap);
		await page.click(datesList); // click outside of the inline input

		expect(await page.$eval(`${datesList} .entity-card-details__name`, (elements) => elements.innerHTML)).toContain(
			newDateName
		);
		expect(await page.$eval(`${datesList} .entity-card-details__text`, (elements) => elements.innerHTML)).toContain(
			newDateDesc
		);
		expect(
			await page.$eval(
				`${datesList} .ee-entity-details__value .ee-tabbable-text`,
				(elements) => elements.innerHTML
			)
		).toContain(newDateCap);

		await browser.close();
	});
});
