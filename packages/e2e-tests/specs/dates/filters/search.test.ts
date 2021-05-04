import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, DateEditor } from '@e2eUtils/admin/event-editor';

const namespace = 'eventDates.filters.search';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

const dateEditor = new DateEditor();

describe(namespace, () => {
	it('should filter based on search query', async () => {
		await addNewDate({ name: 'abc' });
		await addNewDate({ name: 'def' });

		expect(await dateEditor.getItemCount()).toBe(3);

		await dateEditor.filterListBy('search', 'abc');

		expect(await dateEditor.getItemCount()).toBe(1);
		let item = await dateEditor.getItem();
		expect(await item.innerText()).toContain('abc');

		await dateEditor.filterListBy('search', 'def');

		expect(await dateEditor.getItemCount()).toBe(1);
		item = await dateEditor.getItem();
		expect(await item.innerText()).toContain('def');
	});
});
