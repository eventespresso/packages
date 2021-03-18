/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, pressKeyWithModifier } from '../../utils';
import { getDatesLength } from '../../assertions';

beforeAll(async () => {
	await saveVideo(page, 'artifacts/eventDates.filters.mp4');

	await createNewEvent({ title: 'REM-related' });
});

describe('eventDates.filters', () => {
	it('should show trashed date when status filter is set to "all"', async () => {
		await createNewEvent({ title: 'to be deleted' });

		const newDateName = 'brand new trashed date';

		await addNewDate({ name: newDateName, isTrashed: true });

		expect(await getDatesLength()).toBe(1);

		await page.click('[type=button] >> text=show filters');

		await page.selectOption('#ee-dates-list-status-control', {
			value: 'all',
		});

		expect(await getDatesLength()).toBe(2);

		const datetimesList = await page.$eval('#ee-entity-list-datetimes', (elements) => elements.innerHTML);

		expect(await datetimesList).toContain('trash');
	});

	it('should filter dates corresponding to sales control', async () => {
		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'above90Capacity',
		});

		expect(await getDatesLength()).toBe(0);

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'above75Capacity',
		});

		expect(await getDatesLength()).toBe(0);

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'above50Capacity',
		});

		expect(await getDatesLength()).toBe(0);

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'below50Capacity',
		});

		expect(await getDatesLength()).toBe(1);
	});

	it('should filter based on search query', async () => {
		await addNewDate({ name: 'abc' });
		await addNewDate({ name: 'def' });

		expect(await getDatesLength()).toBe(3);

		await page.type('#ee-ee-search-input-dates-list', 'abc');
		expect(await getDatesLength()).toBe(1);
		expect(await page.$eval('#ee-entity-list-datetimes', (elements) => elements.innerHTML)).toContain('abc');

		await pressKeyWithModifier('primary', 'a');
		await page.type('#ee-ee-search-input-dates-list', 'def');
		expect(await getDatesLength()).toBe(1);
		expect(await page.$eval('#ee-entity-list-datetimes', (elements) => elements.innerHTML)).toContain('def');
	});
});
