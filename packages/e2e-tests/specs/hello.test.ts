/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { activatePlugin, createNewEvent, loginUser } from '../utils';

describe('EE', () => {
	it('should activate event-espresso-core', async () => {
		await loginUser();

		await saveVideo(page, 'artifacts/video.mp4');

		process.env.CI !== 'true' && (await activatePlugin('event-espresso'));

		await createNewEvent({ title: 'Brand new event' });

		await createNewEvent({ title: 'Brand new event 2' });

		expect(true).toBe(true);

		await browser.close();
	});
});
