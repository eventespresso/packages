export const clickEventPostPermaLink = async () => {
	await Promise.all([page.waitForNavigation(), page.click('#edit-slug-box #sample-permalink')]);
};
