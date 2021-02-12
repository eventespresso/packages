/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { getDocument, queries } from 'playwright-testing-library';

import { saveVideo } from 'playwright-video';

import { activatePlugin, addNewDate, createNewEvent, loginUser } from '../utils';

const { getByText } = queries;

describe('Event Dates', () => {
	it('should add new date', async () => {
		const capture = await saveVideo(page, 'artifacts/new-date-video.mp4');

		await loginUser();

		process.env.CI === 'true' && (await activatePlugin('event-espresso'));

		expect(true).toBe(true);

		await createNewEvent({ title: 'to be deleted' });

		const $document = await getDocument(page);

		const newDateName = 'brand new date';

		await addNewDate({ name: newDateName });

		const $newDateNameNode = await getByText($document, newDateName);

		expect(await $newDateNameNode.innerHTML()).toContain(newDateName);

		await capture.stop();
		await browser.close();
	});
});
