import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, EntityListParser } from '@e2eUtils/admin/event-editor';
import { clickButton } from '@e2eUtils/common';

const namespace = 'eventDates.filters.search';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

const datesParser = new EntityListParser('datetime');

describe(namespace, () => {
	it('should filter based on search query', async () => {
		await addNewDate({ name: 'abc' });
		await addNewDate({ name: 'def' });

		expect(await datesParser.getItemCount()).toBe(3);

		await clickButton('show filters');

		await page.fill('#ee-ee-search-input-dates-list', 'abc');
		expect(await datesParser.getItemCount()).toBe(1);
		let item = await datesParser.getItem();
		expect(await item.innerText()).toContain('abc');

		await page.fill('#ee-ee-search-input-dates-list', 'def');
		expect(await datesParser.getItemCount()).toBe(1);
		item = await datesParser.getItem();
		expect(await item.innerText()).toContain('def');
	});
});
