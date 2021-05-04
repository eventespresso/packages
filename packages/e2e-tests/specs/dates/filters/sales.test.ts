import { saveVideo } from 'playwright-video';

import { addNewTicket, createNewEvent, removeLastTicket, DateEditor } from '@e2eUtils/admin/event-editor';

const namespace = 'eventDates.filters.sales';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

const dateEditor = new DateEditor();

describe(namespace, () => {
	it('should filter dates corresponding to sales control', async () => {
		await removeLastTicket();

		await addNewTicket({ name: 'Paid Ticket' });

		// await addNewRegistration();

		await dateEditor.filterListBy('sales', { value: 'above90Capacity' });

		expect(await dateEditor.getItemCount()).toBe(0);

		await dateEditor.filterListBy('sales', { value: 'above75Capacity' });

		expect(await dateEditor.getItemCount()).toBe(0);

		await dateEditor.filterListBy('sales', { value: 'above50Capacity' });

		expect(await dateEditor.getItemCount()).toBe(0);

		await dateEditor.filterListBy('sales', { value: 'below50Capacity' });

		expect(await dateEditor.getItemCount()).toBe(1);
	});
});
