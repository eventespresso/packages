import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, EntityListParser, DateEditor } from '@e2eUtils/admin/event-editor';

const namespace = 'event.dates.delete';

const dateEditor = new DateEditor();
const ticketsParser = new EntityListParser('ticket');

beforeAll(async () => {
	// await saveVideo(page, `artifacts/${namespace}.mp4`);
	await createNewEvent({ title: namespace });
	await addNewDate({ name: namespace + '.date' });
});

describe(namespace, () => {
	it('should delete dates by name:', async () => {
		const capture = await saveVideo(page, `artifacts/${namespace}.mp4`);
		let dateCount = await dateEditor.getItemCount();

		expect(dateCount).toBe(2);

		await dateEditor.deleteItemBy('name', namespace + '.date');

		dateCount = await dateEditor.getItemCount();
		let ticketCount = await ticketsParser.getItemCount();

		expect(dateCount).toBe(1);
		expect(ticketCount).toBe(1);

		const date = await dateEditor.getItem();

		await dateEditor.deleteItem(date);

		dateCount = await dateEditor.getItemCount();
		ticketCount = await ticketsParser.getItemCount();
		expect(dateCount).toBe(0);
		expect(ticketCount).toBe(0);
		await capture.stop();
	});
});
