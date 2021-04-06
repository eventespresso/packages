import { saveVideo } from 'playwright-video';

import { createNewEvent, EntityListParser } from '../../utils';
import { modalRTESel } from '../../constants';

const namespace = 'event.dates.card.view.inline-inputs';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

const parser = new EntityListParser('datetime');

describe(namespace, () => {
	it('should check the date card inline inputs', async () => {
		const newDateName = 'new date name';
		const newDateDesc = 'new date description';
		const newDateCap = '100';
		const capture = await saveVideo(page, `artifacts/${namespace}.mp4`);

		try {
			await page.click(`${parser.getRootSelector()} .entity-card-details__name`);
			await page.type(`${parser.getRootSelector()} .entity-card-details__name`, newDateName);
			await page.click(`${parser.getRootSelector()} .entity-card-details__text`);
			await page.click(modalRTESel);
			await page.type(modalRTESel, newDateDesc);
			await page.click('.chakra-modal__footer button[type=submit]');
			await page.click(`${parser.getRootSelector()} .ee-entity-details__value .ee-tabbable-text`);
			await page.type(`${parser.getRootSelector()} .ee-entity-details__value .ee-inline-edit__input`, newDateCap);
			await page.click(parser.getRootSelector()); // click outside of the inline input
		} catch (e) {
			await capture.stop();
		}

		// first/only item
		const item = await parser.getItem();

		expect(await parser.getItemName(item)).toContain(newDateName);

		expect(await parser.getItemDesc(item)).toContain(newDateDesc);

		const details = await item?.$eval(
			'.ee-entity-details__value .ee-tabbable-text',
			(elements) => elements.textContent
		);

		expect(details).toContain(newDateCap);

		await browser.close();
	});
});
