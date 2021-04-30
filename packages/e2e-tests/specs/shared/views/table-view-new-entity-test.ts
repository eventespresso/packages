import { saveVideo } from 'playwright-video';

import { createNewEvent, EntityEditor } from '@e2eUtils/admin/event-editor';
import { screenOptions } from '@e2eUtils/common';
import { entities } from '../../../constants';

const namespace = 'event.views.table.inline-edit';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });

	// In smaller screens, table view does not make the name editable
	// We need to clear some real-state
	await page.click('#collapse-button');
	await screenOptions({ layout: '1' });
});

const editor = new EntityEditor();

describe(namespace, () => {
	for (const entityType of entities) {
		it('should switch the view and rename the inline entity name for ' + entityType, async () => {
			const newName = `yet another name for ${entityType}`;

			await editor.setEntityType(entityType).switchView('table');

			const item = await editor.getItem();
			await editor.updateNameInline(item, newName);

			const content = await item.innerText();

			expect(content).toContain(newName);
		});
	}
});
