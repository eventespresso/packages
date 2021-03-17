/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { activatePlugin, createNewEvent, deactivatePlugin, pressKeyWithModifier } from '../../utils';

const REMSlug = 'event-espresso-recurring-events-manager-ee-4-9';

beforeAll(async () => {
	await activatePlugin(REMSlug);

	await page.click('text=Visit the Maintenance Page to get started');

	await page.click('text=My Database Is Backed Up, Continue');

	await page.click('text=Begin Database Update');

	await page.click('text=Next');

	await saveVideo(page, 'artifacts/REM.mp4');

	await createNewEvent({ title: 'REM-related' });
});

afterAll(async () => {
	await deactivatePlugin(REMSlug);
});

describe('REM', () => {
	it('should generate 40 datetimes at the end of the end of the REM wizard', async () => {
		await page.click('text=Add New Date');
		await page.click('text=Add Recurring Dates');

		await page.selectOption('#ee-r-rule-repeat-frequency', {
			label: 'Daily',
		});

		await page.click('[name="ee-r-rule-end-after"]');

		await pressKeyWithModifier('primary', 'a');

		await page.type('[name="ee-r-rule-end-after"]', '40');

		await page.click('[type=button] >> text=Next');

		await page.click('#ee-ee-add-new-datetime');

		await page.focus('.ee-render-fields >> text=Name');

		await page.type('.ee-render-fields >> text=Name', 'New date');

		await page.click('[type=button] >> text=Next');

		await page.selectOption('#ee-existing-entity', {
			label: 'Free Ticket',
		});

		await page.click('.ee-entity-option__input [type=button] >> text=Add');

		await page.click('[type=button] >> text=Next');

		await page.waitForTimeout(2000);

		await page.selectOption('.rrule-generator-wrapper .ee-pagination__per-page', {
			value: '48',
		});

		const generatedDatesLength = await page.$$eval(
			'.ee-generated-datetime__list .ee-generated-datetime',
			(elements) => elements.length
		);

		await expect(generatedDatesLength).toBe(40);

		await page.click('button[type=submit]');
	});
});
