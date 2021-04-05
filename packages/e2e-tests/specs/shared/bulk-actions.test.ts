import { saveVideo } from 'playwright-video';

import { addNewEntity, createNewEvent, clickButton, switchView } from '../../utils';
import { entities } from '../../constants';

const namespace = 'event.bulk.actions';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	for (const entity of entities) {
		it(`should edit all the ${entity}s names`, async () => {
			const entityList = `#ee-entity-list-${entity}s`;
			const newName = `one name for all`;

			await addNewEntity({ entity, name: 'random name' });
			await switchView(entity, 'table');
			await clickButton('show bulk actions');

			const bulkActionsWrapper = `${entityList} .ee-bulk-edit-actions__wrapper`;

			await page.click(`${entityList} .ee-entity-table [aria-label="select all entities"] span`);

			await page.selectOption(`${bulkActionsWrapper} select`, {
				value: 'edit-details',
			});

			await page.click(`${bulkActionsWrapper} .ee-btn`);

			await page.focus('[aria-label="Name"]');
			await page.type('[aria-label="Name"]', newName);

			await page.click('button[type=submit]');

			await clickButton('Yes');

			// it's easier to traverse DOM in card view
			await switchView(entity, 'card');

			await page.waitForTimeout(2000);

			const entityListNode = await page.$(`#ee-entity-list-${entity}s`);
			const entitiesWithUpdatedName = await entityListNode.$$(`text=${newName}`);

			expect(entitiesWithUpdatedName.length).toBe(2);
		});
	}
});
