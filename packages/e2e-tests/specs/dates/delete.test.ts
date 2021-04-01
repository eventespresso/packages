/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, deleteDateByName } from '../../utils';
import { getEntitiesLength } from '../../assertions';

const namespace = 'event.dates.delete';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
});

describe(namespace, () => {
	it('should delete dates by name:', async () => {
		await createNewEvent({ title: namespace });

		await addNewDate({ name: namespace + '.date' });

		expect(await getEntitiesLength('datetime')).toBe(2);

		// await deleteDateByName('edit title');

		// expect(await getEntitiesLength('datetime')).toBe(1);
		// expect(await getEntitiesLength('ticket')).toBe(1);

		// await deleteDateByName('event.dates.delete.date');

		// expect(await getEntitiesLength('datetime')).toBe(0);
		// expect(await getEntitiesLength('ticket')).toBe(0);
	});
});
