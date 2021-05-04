import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, DateEditor } from '@e2eUtils/admin/event-editor';

const namespace = 'eventDates.filters.status';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

const dateEditor = new DateEditor();

describe(namespace, () => {
	it('should show trashed date when status filter is set to "all"', async () => {
		const newDateName = 'brand new trashed date';

		await addNewDate({ name: newDateName, isTrashed: true });

		expect(await dateEditor.getItemCount()).toBe(1);

		await dateEditor.filterListBy('status', { value: 'all' });

		expect(await dateEditor.getItemCount()).toBe(2);

		const datetimesList = await page.$eval(dateEditor.getRootSelector(), (elements) => elements.innerHTML);

		expect(datetimesList).toContain('trash');
	});
});
