/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

// import type { RegistrationStatus } from '@eventespresso/data';

import { activatePlugin, addNewDate, createNewEvent, loginUser } from '../utils';

describe('Event Dates', () => {
	it('should add new date', async () => {
		const capture = await saveVideo(page, 'artifacts/video.mp4');

		await loginUser();

		await page.screenshot({ path: `artifacts/before.png` });

		process.env.CI === 'true' && (await activatePlugin('event-espresso'));

		expect(true).toBe(true);

		await createNewEvent({ title: 'to be deleted' });

		await addNewDate({ name: 'brand new date' });

		await page.screenshot({ path: `artifacts/after.png` });

		await capture.stop();
		await browser.close();
	});
});
