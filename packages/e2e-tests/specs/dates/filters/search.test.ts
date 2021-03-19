/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, pressKeyWithModifier } from '../../../utils';
import { getDatesLength } from '../../../assertions';

const namespace = 'eventDates.filters.search';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	it('should filter based on search query', async () => {
		await addNewDate({ name: 'abc' });
		await addNewDate({ name: 'def' });

		expect(await getDatesLength()).toBe(3);

		await page.click('[type=button] >> text=show filters');
		await page.type('#ee-ee-search-input-dates-list', 'abc');
		expect(await getDatesLength()).toBe(1);
		expect(await page.$eval('#ee-entity-list-datetimes', (elements) => elements.innerHTML)).toContain('abc');

		await pressKeyWithModifier('primary', 'a');
		await page.type('#ee-ee-search-input-dates-list', 'def');

		expect(await getDatesLength()).toBe(1);
		expect(await page.$eval('#ee-entity-list-datetimes', (elements) => elements.innerHTML)).toContain('def');
	});
});
