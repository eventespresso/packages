export const getEventUrl = async () => {
	const url = await page.$eval('.nav-tab-wrapper >> text=Edit Event', (el) => el.getAttribute('href'));
	return url;
};
