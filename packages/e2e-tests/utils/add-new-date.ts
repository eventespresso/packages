export const addNewDate = async ({ name }: any = {}) => {
	await page.click('[data-testid="add-single-date"]');

	await page.focus('[data-testid="add-single-date-name"]');

	await page.type('[data-testid="add-single-date-name"]', name);

	await page.click('[data-testid="save-and-assign-tickets"]');

	await page.click('[aria-label="assign ticket"]');

	await page.click('button[type=submit]');
};
