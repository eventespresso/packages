import { createNewEvent } from '../utils';

describe('DummyTest', () => {
	it('Does nothing more than creating an event', async () => {
		await createNewEvent({ title: 'Dummy Event' });

		expect(true).toBe(true);
	});
});
