import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, EntityListParser } from '../../utils';

const parser = new EntityListParser('datetime');

describe('eventDates', () => {
	it('should add new date', async () => {
		const capture = await saveVideo(page, 'artifacts/new-date.mp4');

		await createNewEvent({ title: 'to be deleted' });

		const newDateName = 'brand new date';

		await addNewDate({ name: newDateName });

		expect(await parser.getItemName()).toContain(newDateName);

		await capture.stop();
		await browser.close();
	});
});
