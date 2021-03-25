import type { Datetime } from '@eventespresso/edtr-services';

import { clickButton } from './';

export const addNewDate = async ({ name, isTrashed }: Partial<Datetime>) => {
	await page.click('text=Add New Date');

	await page.focus('.ee-render-fields >> text=Name');

	await page.type('.ee-render-fields >> text=Name', name);

	isTrashed && (await page.click('[aria-label="Trash"]'));

	await clickButton('Save and assign tickets');

	await page.click('[aria-label="assign ticket"]');

	await page.click('button[type=submit]');
};
