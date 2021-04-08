import { saveVideo } from 'playwright-video';

import { clickLabel, createNewEvent, EntityListParser, TAMRover } from '../../utils';
import { addDatesAndTickets } from './utils';

const tamrover = new TAMRover();
const parser = new EntityListParser('datetime', 'card');

beforeAll(async () => {
	await saveVideo(page, 'artifacts/tam-related-count-vs-assignments.mp4');

	await createNewEvent({ title: 'TAM: Related Count in card and table view vs TAM Assignments' });
	await addDatesAndTickets();

	await page.waitForTimeout(1000);
});

describe('TAM:RelatedCountVsAssignments', () => {
	// check for both dates and tickets
	for (const entityType of ['datetime', 'ticket'] as const) {
		// check for both the views
		for (const viewType of ['card', 'table'] as const) {
			it(`tests related items count for ${entityType}s in ${viewType} view vs assignments count in TAM`, async () => {
				// Set entity and switch to th view type before getting the ids
				await parser.setEntityType(entityType).switchView(viewType);

				const dbIds = await parser.getDbIds();
				// create a map of db id and related item count
				const relatedCountInList: Record<number, number> = {};
				// check for each entity in the list
				for (const dbId of dbIds) {
					relatedCountInList[dbId] = await parser.getRelatedItemsCount(dbId);
				}

				// Open TAM for all dates/tickets
				await tamrover.setForType('all').launch();

				// Toggle filters
				await clickLabel('show trashed dates');
				await clickLabel('show expired tickets');
				await clickLabel('show trashed tickets');

				const mapFromTo = entityType === 'ticket' ? 'ticket2dates' : 'date2tickets';
				const map = await tamrover.getMap({ forceGenerate: true, mapFromTo });

				const relatedCountInTAM: Record<number, number> = Object.entries(map).reduce(
					(prevMap, [entityId, relationMap]) => {
						return { ...prevMap, [entityId]: Object.values(relationMap).filter((v) => v === 'OLD').length };
					},
					{}
				);

				for (const dbId in relatedCountInList) {
					const countInList = relatedCountInList[dbId];
					const countInTAM = relatedCountInTAM[dbId];

					expect(countInList).toEqual(countInTAM);
				}

				// Close TAM modal
				await tamrover.close();
			});
		}
	}
});
