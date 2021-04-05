/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, deleteDateByName, EntityListParser } from '../../utils';

const namespace = 'event.dates.delete';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
});

const datesParser = new EntityListParser('datetime');
const ticketsParser = new EntityListParser('ticket');

describe(namespace, () => {
	it('should delete dates by name:', async () => {
		await createNewEvent({ title: namespace });

		await addNewDate({ name: namespace + '.date' });

		expect(await datesParser.getItemCount()).toBe(2);

		await deleteDateByName('edit title');

		expect(await datesParser.getItemCount()).toBe(1);
		expect(await ticketsParser.getItemCount()).toBe(1);

		await deleteDateByName('event.dates.delete.date');

		expect(await datesParser.getItemCount()).toBe(0);
		expect(await ticketsParser.getItemCount()).toBe(0);
	});
});
