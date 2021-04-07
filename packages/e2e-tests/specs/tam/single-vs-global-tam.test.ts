import { saveVideo } from 'playwright-video';

import { createNewEvent, EntityListParser, TAMRover } from '../../utils';
import { addDatesAndTickets } from './utils';

const tamrover = new TAMRover();
const parser = new EntityListParser();

beforeAll(async () => {
	await saveVideo(page, 'artifacts/tam-for-single-date.mp4');

	await createNewEvent({ title: 'Test for Single Vs Global TAM data' });
	await addDatesAndTickets();

	// await page.goto(
	// 	'http://eventsmart.local.host/wp-admin/admin.php?page=espresso_events&action=edit&post=79&return=default'
	// );

	await page.waitForTimeout(1000);
});

afterAll(async () => {
	// Close TAM modal
	await tamrover.close();
});

describe('TAM:SingleVsGlobalTAM', () => {
	for (const entityType of ['datetime', 'ticket'] as const) {
		it(`tests the raltions for each ${entityType} to be the same in single and global TAM modal`, async () => {
			const mapFromTo = entityType === 'ticket' ? 'ticket2dates' : 'date2tickets';

			const entities = await parser.setEntityType(entityType).getListItems();

			for (const entity of entities) {
				const entityId = await parser.getItemDbId(entity);

				// Lets launch TAM for the single entity.
				await tamrover.setForType(entityType).setDbId(entityId).launch({ mapFromTo });
				// Current map when opened for the single entity.
				const map = await tamrover.getMap();
				const mapForTheEntity = map[entityId];

				// Close TAM modal
				await tamrover.close();

				// Now open TAM for all dates/tickets
				await tamrover.setForType('all').launch({ mapFromTo });
				const newMap = await tamrover.getMap();

				const newMapForTheEntity = newMap[entityId];

				expect(mapForTheEntity).toEqual(newMapForTheEntity);
				await tamrover.close();
			}
		});
	}
});
