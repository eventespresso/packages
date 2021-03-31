export const switchView = async (type: 'datetime' | 'ticket', view: 'card' | 'table') => {
	await page.click(`#ee-entity-list-${type}s .ee-filter-bar__main [type=button] >> text=${view} view`);
};
