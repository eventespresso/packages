import { saveVideo } from 'playwright-video';

import { createNewEvent, EntityListParser } from '@e2eUtils/admin/event-editor';
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

		await page.click(`${parser.getRootSelector()} .entity-card-details__name`);
		await page.type(`${parser.getRootSelector()} .entity-card-details__name`, newDateName);

		let waitForListUpdate = await parser.createWaitForListUpdate();
		await page.click(parser.getRootSelector()); // click outside of the inline input
		await waitForListUpdate();

		await page.click(`${parser.getRootSelector()} .entity-card-details__text`);
		await page.click(modalRTESel);
		await page.type(modalRTESel, newDateDesc);

		waitForListUpdate = await parser.createWaitForListUpdate();
		await page.click('.chakra-modal__footer button[type=submit]');
		await waitForListUpdate();

		await page.click(`${parser.getRootSelector()} .ee-entity-details__value .ee-tabbable-text`);
		await page.type(`${parser.getRootSelector()} .ee-entity-details__value .ee-inline-edit__input`, newDateCap);

		waitForListUpdate = await parser.createWaitForListUpdate();
		await page.click(parser.getRootSelector()); // click outside of the inline input
		await waitForListUpdate();

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
