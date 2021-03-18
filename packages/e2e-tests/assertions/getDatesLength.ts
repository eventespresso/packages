export const getDatesLength = async () =>
	await page.$$eval('#ee-entity-list-datetimes .ee-entity-card-wrapper', (elements) => elements.length);
