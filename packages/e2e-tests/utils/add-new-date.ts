export const addNewDate = async ({ name }: any = {}) => {
	await page.click('text=Add New Date');

	await page.focus('.ee-render-fields >> text=Name');

	await page.type('.ee-render-fields >> text=Name', name);

	await page.click('[type=button] >> text=Save and assign tickets');

	await page.click('[aria-label="assign ticket"]');

	await page.click('button[type=submit]');
};
