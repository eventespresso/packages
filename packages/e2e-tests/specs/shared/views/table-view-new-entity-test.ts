import { saveVideo } from 'playwright-video';
import { getDocument, queries } from 'playwright-testing-library';

import { addNewEntity, createNewEvent, findEntityIdByName, EntityListParser } from '@e2eUtils/admin/event-editor';
import { screenOptions } from '@e2eUtils/common';
import { entities } from '../../../constants';

const { getByTestId } = queries;
const namespace = 'event.views.table.new-entities';

beforeAll(async () => {
	await page.click('#collapse-button');
	await createNewEvent({ title: namespace });
});

const parser = new EntityListParser();

describe(namespace, () => {
	for (const entityType of entities) {
		it('should switch the view and rename the inline entity name:' + entityType, async () => {
			const entityList = `#ee-entity-list-${entityType}s`;
			const newName = `yet another name for ${entityType}`;
			const capture = await saveVideo(page, `artifacts/${namespace}.mp4`);

			try {
				await screenOptions({ layout: '1' });
				await addNewEntity({ entityType, name: `new ${entityType}` });
				await parser.setEntityType(entityType).switchView('table');
				const searchNameQuery = entityType === 'datetime' ? 'edit title' : 'Free Ticket';
				const entityId = await findEntityIdByName({
					entityType,
					name: searchNameQuery,
					view: 'table',
				});
				const $document = await getDocument(page);
				const editableName = await page.$(
					`${entityList} [data-testid="ee-${entityType}-list-view-row-${entityId}"] .ee-tabbable-text`
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
