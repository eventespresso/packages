/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { activatePlugin, addNewDate, createNewEvent, loginUser } from '../utils';

describe('Event Dates', () => {
	it('should add new date', async () => {
		const capture = await saveVideo(page, 'artifacts/new-date-video.mp4');

		await loginUser();

		process.env.CI === 'true' && (await activatePlugin('event-espresso'));

		expect(true).toBe(true);

		await createNewEvent({ title: 'to be deleted' });

		const newDateName = 'brand new date';

		await addNewDate({ name: newDateName });

		const newDateNameNode = await page.$eval(
			'[data-testid="ee-entity-list-datetimes"] .ee-entity-card-wrapper .entity-card-details__name',
			(el) => el.innerHTML
		);
		expect(newDateNameNode).toContain(newDateName);

		await capture.stop();
		await browser.close();
	});
});
