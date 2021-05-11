import { addNewTicket, createNewEvent, TicketEditor } from '@e2eUtils/admin/event-editor';

const namespace = 'eventEditor.tickets.filters.search';

beforeAll(async () => {
	await createNewEvent({ title: namespace });
});

const ticketEditor = new TicketEditor();

describe(namespace, () => {
	it('should filter based on search query', async () => {
		await addNewTicket({ name: 'abc' });
		await addNewTicket({ name: 'def' });

		expect(await ticketEditor.getItemCount()).toBe(3);

		await ticketEditor.filterListBy('search', 'abc');

		expect(await ticketEditor.getItemCount()).toBe(1);
		let item = await ticketEditor.getItem();
		expect(await item.innerText()).toContain('abc');

		await ticketEditor.filterListBy('search', 'def');

		expect(await ticketEditor.getItemCount()).toBe(1);
		item = await ticketEditor.getItem();
		expect(await item.innerText()).toContain('def');
	});
});
