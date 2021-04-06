import { saveVideo } from 'playwright-video';
import { getDocument, queries } from 'playwright-testing-library';

import { addNewEntity, createNewEvent, findEntityIdByName, screenOptions, switchView } from '../../../utils';
import { entities } from '../../../constants';

const { getByTestId } = queries;
const namespace = 'event.views.table.new-entities';

beforeAll(async () => {
	await page.click('#collapse-button');
	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	for (const entity of entities) {
		it('should switch the view and rename the inline entity name:' + entity, async () => {
			const entityList = `#ee-entity-list-${entity}s`;
			const newName = `yet another name for ${entity}`;
			const capture = await saveVideo(page, `artifacts/${namespace}.mp4`);

			try {
				await screenOptions({ layout: '1' });
				await addNewEntity({ entity, name: `new ${entity}` });
				await switchView(entity, 'table');
				const searchNameQuery = entity === 'datetime' ? 'edit title' : 'Free Ticket';
				const entityId = await findEntityIdByName({
					entity,
					name: searchNameQuery,
					view: 'table',
				});
				const $document = await getDocument(page);
				const editableName = await page.$(
					`${entityList} [data-testid="ee-${entity}-list-view-row-${entityId}"] .ee-tabbable-text`
				);
				const newTicketNameNode = await getByTestId($document, `ee-entity-list-view-row-editable-${entityId}`);
				await editableName.click();
				await newTicketNameNode.type(newName);
				await page.click(entityList);
			} catch (e) {
				await capture.stop();
			}

			expect(await page.$eval(entityList, (elements) => elements.innerHTML)).toContain(newName);
		});
	}
});
