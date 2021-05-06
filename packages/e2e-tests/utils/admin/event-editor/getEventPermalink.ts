export const getEventPermalink = async () => {
	return await page.$eval('#edit-slug-box #sample-permalink a', (el) => el.getAttribute('href'));
};
