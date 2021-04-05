import { getDocument, queries } from 'playwright-testing-library';

import { clickButton, switchView } from './';
import { EntityListParser } from './EntityListParser';

const { getByTestId } = queries;

export const deleteDateByName = async (name: string) => {
	const view = 'card';

	await switchView('datetime', view);

	const parser = new EntityListParser('datetime', view);

	const dateId = await parser.getDbIdByName(name);

	const $document = await getDocument(page);

	const mainMenu = await getByTestId($document, `ee-datetime-main-menu-${dateId}`);

	await mainMenu.click();

	// dropdown menu items might not be visible, that's why we need to scroll down a bit
	await page.evaluate(() => window.scrollBy(0, window.innerHeight - 200));

	const trashBtn = await getByTestId($document, `ee-trash-date-${dateId}`);

	await trashBtn.click();

	await clickButton('Yes');
};
