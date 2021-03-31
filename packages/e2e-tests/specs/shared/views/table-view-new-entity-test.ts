/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';
import { getDocument, queries } from 'playwright-testing-library';

import { addNewEntity, createNewEvent, findEntityIdByName, switchView } from '../../../utils';
import { entities } from '../../../constants';

const namespace = 'event.views.table.new-entities';
const { getByTestId } = queries;

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	for (const entity of entities) {
		it('should switch the view and rename the inline entity name:' + entity, async () => {
			const entityList = `#ee-entity-list-${entity}s`;
			const newName = `yet another name for ${entity}`;

			await addNewEntity({ entity, name: `new ${entity}` });

			await switchView(entity, 'table');

			const searchNameQuery = entity === 'datetime' ? 'edit title' : 'Free Ticket';

			const entityId = await findEntityIdByName({
				entity,
				name: searchNameQuery,
			});

			const $document = await getDocument(page);

			const newTicketNameNode = await getByTestId($document, `ee-entity-list-view-row-editable-${entityId}`);

			await page.click(`${entityList} .ee-tabbable-text >> text=${searchNameQuery}`);

			await newTicketNameNode.type(newName);

			await page.click(entityList);

			await switchView(entity, 'card');

			expect(await page.$eval(entityList, (elements) => elements.innerHTML)).toContain(newName);
		});
	}
});
